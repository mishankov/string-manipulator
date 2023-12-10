import Replace, { type ReplaceManipulation } from "./components/Replace.svelte"
import Append, { type AppendManipulation }  from "./components/Append.svelte"
import Prepend, { type PrependManipulation }  from "./components/Prepend.svelte"

// Re-export components
export { Replace, Append, Prepend }

// Union type for all manipulations
export type Manipulation = ReplaceManipulation | AppendManipulation | PrependManipulation

// Function to apply manipulations
export function doManipulation(input: string, manipulation: Manipulation): string {
  switch (manipulation.type) {
    case "replace": {
      return input.replaceAll(new RegExp(manipulation.from, "g"), manipulation.to)
    }
    case "append": {
      return input + manipulation.suffix
    }
    case "prepend": {
      return manipulation.prefix + input
    }
  }
}
