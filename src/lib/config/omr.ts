import type { AdvancedConfig, Data, Result } from 'omrjs';
import workerUrl from 'omrjs/worker?worker&url';
import type { QuestionAlternative } from '#lib/models/question.ts';

export const OMR_DATA: Data = {
	cornerPattern: 'bullseye',
	cornerSize: 100,
	answersBlocks: [174, 990].map((startX) => ({
		startX,
		startY: 337.5,
		rows: 20,
		columns: 5,
		width: 50,
		gaps: { columns: 21, rows: 29.75 }
	}))
};

export const OMR_CONFIG: AdvancedConfig = {
	page: { backgroundColor: [255, 255, 255], colorTolerance: 0.5 },
	aspectRatio: 0.75,
	rotation: 0,
	orientation: 'auto',
	fillThreshold: 0.6,
	debug: false,
	nccThreshold: 0.75,
	// zero-based position of the printed alternative (0 = A)
	outputFormat: { type: 'number', startAt: 0 },
	worker: { enabled: true, url: workerUrl }
};

export interface ScanResult {
	/** Printed position (0 = A) per question, null when blank or ambiguous. */
	answers: Array<QuestionAlternative | null>;
	/** True when a question had several marks or omrjs reported warnings. */
	needsReview: boolean;
}

/** Flattens `result.answers[block][row]` into question order. */
export function parseOmrResult(result: Result): ScanResult {
	let needsReview = result.warnings.length > 0;
	const answers = result.answers.flat().map((marks) => {
		if (marks.length > 1) needsReview = true;
		return marks.length === 1 ? (marks[0] as QuestionAlternative) : null;
	});
	return { answers, needsReview };
}
