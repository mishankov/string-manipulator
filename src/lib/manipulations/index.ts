import Append, { type AppendManipulation } from './components/Append.svelte';
import Compose, { type ComposeManipulation } from './components/Compose.svelte';
import Prepend, { type PrependManipulation } from './components/Prepend.svelte';
import Replace, { type ReplaceManipulation } from './components/Replace.svelte';
import Slice, { type SliceManipulation } from './components/Slice.svelte';
import SplitCompose, { type SplitComposeManipulation } from './components/SplitCompose.svelte';
import SplitGetFromIndex, {
	type SplitGetFromIndexManipulation
} from './components/SplitGetFromIndex.svelte';
import SplitJoin, { type SplitJoinManipulation } from './components/SplitJoin.svelte';
import Trim, { type TrimManipulation } from './components/Trim.svelte';

import AddManipulation from './components/AddManipulation.svelte';
import Manipulation from './components/Manipulation.svelte';
import ManipulationsList from './components/ManipulationsList.svelte';

// Re-export components
export {
	Append,
	Compose,
	Prepend,
	Replace,
	Slice,
	SplitCompose,
	SplitGetFromIndex,
	SplitJoin,
	Trim,
	Manipulation,
	AddManipulation,
	ManipulationsList
};

export interface ManipulationBase {
	id?: string;
}

// Union type for all manipulations
export type TManipulation =
	| AppendManipulation
	| ComposeManipulation
	| PrependManipulation
	| ReplaceManipulation
	| SliceManipulation
	| SplitComposeManipulation
	| SplitGetFromIndexManipulation
	| SplitJoinManipulation
	| TrimManipulation;

// Supported manupulations to use in splitJoin
export type InnerSplitJoinManipulation = TManipulation;

function prepareInput(input: string): string {
	const stuffToReplace = [
		['\\\\n', '\n'],
		['\\\\t', '\t']
	];

	const preparedInput = stuffToReplace.reduce((previousResult, currentValue) => {
		return previousResult.replaceAll(new RegExp(currentValue[0], 'g'), currentValue[1]);
	}, input);

	return preparedInput;
}

export function applyManipulations(source: string, manipulations: TManipulation[]): string {
	return manipulations.reduce((previousResult, curentManipulation) => {
		return doManipulation(previousResult, curentManipulation);
	}, source);
}

// Function to apply manipulations
export function doManipulation(input: string, manipulation: TManipulation): string {
	const result = doManipulationInner(input, manipulation);

	console.log(`${input.replaceAll('\n', '\\n')} -> ${JSON.stringify(manipulation)} => ${result}}`);

	return result;
}

function doManipulationInner(input: string, manipulation: TManipulation): string {
	try {
		switch (manipulation.type) {
			case 'replace': {
				if (manipulation.from === '') return input;

				return input.replaceAll(
					new RegExp(prepareInput(manipulation.from), 'g'),
					prepareInput(manipulation.to)
				);
			}
			case 'append': {
				return input + prepareInput(manipulation.suffix);
			}
			case 'prepend': {
				return prepareInput(manipulation.prefix) + input;
			}
			case 'splitGetFromIndex': {
				if (manipulation.splitString.length === 0) return input;
				const splittedInput = input.split(manipulation.splitString);

				if (splittedInput.length - 1 >= manipulation.index) {
					return splittedInput[manipulation.index];
				}

				return input;
			}
			case 'compose': {
				return prepareInput(manipulation.pattern).replaceAll(manipulation.placeholder, input);
			}
			case 'slice': {
				if (manipulation.end === null) {
					return input.slice(manipulation.start);
				}
				return input.slice(manipulation.start, manipulation.end);
			}
			case 'splitCompose': {
				if (manipulation.splitString.length === 0) return input;
				const splittedInput = input.split(manipulation.splitString);

				if (splittedInput.length === 1) return input;

				return splittedInput.reduce((previousResult, currentValue, currentIndex) => {
					const placeholderWithIndex = manipulation.placeholder.replaceAll(
						'd',
						currentIndex.toString()
					);
					return previousResult.replaceAll(placeholderWithIndex, currentValue);
				}, manipulation.pattern);
			}
			case 'splitJoin': {
				return input
					.split(prepareInput(manipulation.splitString))
					.map((value) => {
						return applyManipulations(value, manipulation.innerManipulations);
					})
					.join(prepareInput(manipulation.joinString));
			}
			case 'trim': {
				switch (manipulation.trimType) {
					case 'leading': {
						return input.trimStart();
					}
					case 'trailing': {
						return input.trimEnd();
					}
					case 'all': {
						return input.trim();
					}
					default: {
						return input;
					}
				}
			}
		}
	} catch (exception) {
		if (exception instanceof Error) {
			console.log(
				`Exception occured with manipulation ${JSON.stringify(
					manipulation
				)}: ${exception.toString()}`
			);
		}
		return input;
	}
}
