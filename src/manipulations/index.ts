import Replace, { type ReplaceManipulation } from "./components/Replace.svelte"
import Append, { type AppendManipulation }  from "./components/Append.svelte"

// Union type for all manipulations
export type Manipulation = ReplaceManipulation | AppendManipulation

// Function to apply manipulations
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

// Re-export components
export { Replace, Append }
