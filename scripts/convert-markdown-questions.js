#!/usr/bin/env node
/**
 * Converts exam question markdown files into src/lib/data/{year}-{semester}.ts
 *
 * Usage: node scripts/convert-markdown-questions.js
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

/** @typedef {'MecanicaClassica' | 'Eletromagnetismo' | 'Termodinamica' | 'FisicaModerna' | 'MecanicaQuantica' | 'FisicaEstatistica'} AreaName */

/**
 * Edit this configuration before running the script.
 * Always provide exactly 6 input files, one per area.
 */
const CONFIG = {
	edition: { year: 2026, semester: 1 },
	inputs: [
		{ file: '2026-mecanica-classica.md', area: 'MecanicaClassica' },
		{ file: '2026-eletromagnetismo.md', area: 'Eletromagnetismo' },
		{ file: '2026-termodinamica.md', area: 'Termodinamica' },
		{ file: '2026-fisica-moderna.md', area: 'FisicaModerna' },
		{ file: '2026-mecanica-quantica.md', area: 'MecanicaQuantica' },
		{ file: '2026-fisica-estatistica.md', area: 'FisicaEstatistica' }
	]
};

const ROOT = process.cwd();
const OUTPUT_DIR = join(ROOT, 'src/lib/data');

const AREA_ORDER = [
	'MecanicaClassica',
	'Eletromagnetismo',
	'Termodinamica',
	'FisicaModerna',
	'MecanicaQuantica',
	'FisicaEstatistica'
];

const SIGLA_TO_AREA = {
	mc: 'MecanicaClassica',
	em: 'Eletromagnetismo',
	te: 'Termodinamica',
	fm: 'FisicaModerna',
	mq: 'MecanicaQuantica',
	fe: 'FisicaEstatistica'
};

const QUESTION_HEADER_RE = /^## Q\.(\d+) \[([^\]]+)\]\s*$/;
const QUESTION_CODE_RE = /^([a-z]+)(PT)(\d+)([ab])$/i;
const ALTERNATIVE_RE = /^- ([a-e])\) (.*)$/;

/** @param {string} text */
function formatTsText(text) {
	const escaped = text.replaceAll('`', '\\`').replaceAll('${', '\\${');

	return `String.raw\`${escaped}\``;
}

/**
 * @param {string} block
 * @param {string} questionLabel
 * @returns {{ statement: string, alternatives: Record<string, string> }}
 */
function parseQuestionBody(block, questionLabel) {
	const lines = block.split('\n');
	const statementLines = [];
	/** @type {Record<string, string>} */
	const alternatives = {};
	let parsingAlternatives = false;

	for (const rawLine of lines) {
		const line = rawLine.trimEnd();

		if (!line.trim()) {
			continue;
		}

		const alternativeMatch = line.match(ALTERNATIVE_RE);
		if (alternativeMatch) {
			parsingAlternatives = true;
			const [, letter, text] = alternativeMatch;
			alternatives[letter] = text.trim();
			continue;
		}

		if (parsingAlternatives) {
			if (/^-{3,}\s*$/.test(line.trim())) {
				continue;
			}

			throw new Error(`${questionLabel}: unexpected content after alternatives: "${line}"`);
		}

		statementLines.push(line.trim());
	}

	const statement = statementLines.join('');
	const missingAlternatives = ['a', 'b', 'c', 'd', 'e'].filter((letter) => !alternatives[letter]);

	if (missingAlternatives.length > 0) {
		throw new Error(`${questionLabel}: missing alternatives: ${missingAlternatives.join(', ')}`);
	}

	return { statement, alternatives };
}

/**
 * @param {string} content
 * @returns {Array<{ globalNumber: number, code: string, statement: string, alternatives: Record<string, string> }>}
 */
function parseMarkdownQuestions(content) {
	const questions = [];
	const sections = content.split(/\n(?=## Q\.)/);

	for (const section of sections) {
		const trimmed = section.trim();
		if (!trimmed) {
			continue;
		}

		const lines = trimmed.split('\n');
		const headerMatch = lines[0].match(QUESTION_HEADER_RE);
		if (!headerMatch) {
			continue;
		}

		const [, globalNumber, code] = headerMatch;
		const questionLabel = `Q.${globalNumber} [${code}]`;
		const body = lines.slice(1).join('\n');
		const { statement, alternatives } = parseQuestionBody(body, questionLabel);

		questions.push({
			globalNumber: Number(globalNumber),
			code,
			statement,
			alternatives
		});
	}

	return questions;
}

/**
 * @param {string} code
 */
function parseQuestionCode(code) {
	const match = code.match(QUESTION_CODE_RE);
	if (!match) {
		throw new Error(`Invalid question code "${code}". Expected format like "fePT2b".`);
	}

	const [, sigla, , questionNumber, versionLetter] = match;
	const area = SIGLA_TO_AREA[sigla.toLowerCase()];

	if (!area) {
		throw new Error(`Unknown sigla "${sigla}" in code "${code}".`);
	}

	return {
		sigla,
		questionNumber: Number(questionNumber),
		version: versionLetter.toLowerCase() === 'a' ? 'A' : 'B',
		area
	};
}

/**
 * @param {Array<{ area: AreaName, questionNumber: number, version: 'A' | 'B', statement: string, alternatives: Record<string, string> }>} questions
 */
function generateTypeScriptFile(questions, edition) {
	const sortedQuestions = [...questions].sort((a, b) => {
		const areaDiff = AREA_ORDER.indexOf(a.area) - AREA_ORDER.indexOf(b.area);
		if (areaDiff !== 0) {
			return areaDiff;
		}

		const numberDiff = a.questionNumber - b.questionNumber;
		if (numberDiff !== 0) {
			return numberDiff;
		}

		return a.version === 'A' ? -1 : 1;
	});

	const questionBlocks = sortedQuestions
		.map((question) => {
			const alternativeBlocks = ['a', 'b', 'c', 'd', 'e']
				.map((letter) => {
					const altEnum = letter.toUpperCase();
					return `\t\t\t{\n\t\t\t\ttext: ${formatTsText(question.alternatives[letter])},\n\t\t\t\tnumber: QuestionAlternative.${altEnum}\n\t\t\t}`;
				})
				.join(',\n');

			return `\t{\n\t\t...defaultData,\n\t\tversion: Version.${question.version},\n\t\tarea: Area.${question.area},\n\t\thelp: {\n\t\t\tyoutubeVideoId: videos[Area.${question.area}]\n\t\t},\n\t\tquestionNumber: ${question.questionNumber},\n\t\tstatement: {\n\t\t\ttext: ${formatTsText(question.statement)}\n\t\t},\n\t\talternatives: [\n${alternativeBlocks}\n\t\t]\n\t}`;
		})
		.join(',\n');

	return `import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
\tyear: ${edition.year},
\tsemester: ${edition.semester},
\tcorrect: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
\ttags: [],
\thelp: {}
};

const videos = {
\t[Area.MecanicaClassica]: undefined,
\t[Area.Eletromagnetismo]: undefined,
\t[Area.FisicaModerna]: undefined,
\t[Area.MecanicaQuantica]: undefined,
\t[Area.Termodinamica]: undefined,
\t[Area.FisicaEstatistica]: undefined
};

export default <Question[]>[${questionBlocks ? `\n${questionBlocks}\n` : ''}];
`;
}

function main() {
	if (CONFIG.inputs.length !== 6) {
		throw new Error(`Expected exactly 6 input files, got ${CONFIG.inputs.length}.`);
	}

	const configuredAreas = new Set(CONFIG.inputs.map((input) => input.area));
	const missingAreas = AREA_ORDER.filter((area) => !configuredAreas.has(area));
	if (missingAreas.length > 0) {
		throw new Error(`Missing areas in configuration: ${missingAreas.join(', ')}`);
	}

	/** @type {Array<{ area: AreaName, questionNumber: number, version: 'A' | 'B', statement: string, alternatives: Record<string, string>, code: string, sourceFile: string }>} */
	const allQuestions = [];

	for (const input of CONFIG.inputs) {
		const filePath = resolve(ROOT, input.file);
		const content = readFileSync(filePath, 'utf8');
		const parsedQuestions = parseMarkdownQuestions(content);

		console.log(`Parsed ${parsedQuestions.length} questions from ${input.file}`);

		for (const parsed of parsedQuestions) {
			const metadata = parseQuestionCode(parsed.code);

			if (metadata.area !== input.area) {
				throw new Error(
					`Area mismatch in ${input.file}: code "${parsed.code}" maps to ${metadata.area}, but file is configured as ${input.area}.`
				);
			}

			allQuestions.push({
				area: input.area,
				questionNumber: metadata.questionNumber,
				version: metadata.version,
				statement: parsed.statement,
				alternatives: parsed.alternatives,
				code: parsed.code,
				sourceFile: input.file
			});
		}
	}

	const outputPath = join(OUTPUT_DIR, `${CONFIG.edition.year}-${CONFIG.edition.semester}.ts`);
	const output = generateTypeScriptFile(allQuestions, CONFIG.edition);
	writeFileSync(outputPath, output, 'utf8');

	console.log(`Wrote ${allQuestions.length} questions to ${outputPath}`);
}

main();
