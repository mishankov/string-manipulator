import { type ReplaceManipulation } from "./components/Replace.svelte";
import { type AppendManipulation } from "./components/Append.svelte";

export type Manipulation = ReplaceManipulation | AppendManipulation

export function doManipulation(input: string, manipulation: Manipulation): string {
  switch (manipulation.type) {
    case "replace": {
      return input.replaceAll(new RegExp(manipulation.from, "g"), manipulation.to)
    }
    case "append": {
      return input + manipulation.suffix
    }
  }
}
