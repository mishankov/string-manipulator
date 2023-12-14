import Replace, { type ReplaceManipulation } from "./components/Replace.svelte";
import Append, { type AppendManipulation } from "./components/Append.svelte";
import Prepend, { type PrependManipulation } from "./components/Prepend.svelte";
import SplitGetFromIndex, {
	type SplitGetFromIndexManipulation,
} from "./components/SplitGetFromIndex.svelte";
import Compose, { type ComposeManipulation } from "./components/Compose.svelte";
import Slice, { type SliceManipulation } from "./components/Slice.svelte";

// Re-export components
export { Replace, Append, Prepend, SplitGetFromIndex, Compose, Slice };

// Union type for all manipulations
export type Manipulation =
	| ReplaceManipulation
	| AppendManipulation
	| PrependManipulation
	| SplitGetFromIndexManipulation
	| ComposeManipulation
	| SliceManipulation;

function prepareInput(input: string): string {
	const stuffToReplace = [
		["\\\\n", "\n"],
		["\\\\t", "\t"],
	];

	const preparedInput = stuffToReplace.reduce(
		(previousResult, currentValue, index, array) => {
			return previousResult.replaceAll(
				new RegExp(currentValue[0], "g"),
				currentValue[1],
			);
		},
		input,
	);

	return preparedInput;
}

// Function to apply manipulations
export function doManipulation(
	input: string,
	manipulation: Manipulation,
): string {
	switch (manipulation.type) {
		case "replace": {
			return input.replaceAll(
				new RegExp(manipulation.from, "g"),
				prepareInput(manipulation.to),
			);
		}
		case "append": {
			return input + prepareInput(manipulation.suffix);
		}
		case "prepend": {
			return prepareInput(manipulation.prefix) + input;
		}
		case "splitGetFromIndex": {
			if (manipulation.splitString.length === 0) return input;
			const splittedInput = input.split(manipulation.splitString);

			if (splittedInput.length - 1 >= manipulation.index) {
				return splittedInput[manipulation.index];
			}

			return input;
		}
		case "compose": {
			return prepareInput(manipulation.pattern).replaceAll(
				manipulation.placeholder,
				input,
			);
		}
		case "slice": {
			if (manipulation.end === null) {
				return input.slice(manipulation.start);
			}
			return input.slice(manipulation.start, manipulation.end);
		}
	}
}
