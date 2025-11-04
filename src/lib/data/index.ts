import type { Question } from '$lib/models/question';

import data20231 from './2023-1';
import data20232 from './2023-2';
import data20241 from './2024-1';
import data20242 from './2024-2';
import data20251 from './2025-1';
import data20252 from './2025-2';

/**
 * All available exam questions from all datasets.
 * To add a new dataset, import it above and add it to this array.
 */
export const allQuestions: Question[] = [
	...data20231,
	...data20232,
	...data20241,
	...data20242,
	...data20251,
	...data20252
];
