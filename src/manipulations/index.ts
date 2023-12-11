import Replace, { type ReplaceManipulation } from "./components/Replace.svelte"
import Append, { type AppendManipulation }  from "./components/Append.svelte"
import Prepend, { type PrependManipulation }  from "./components/Prepend.svelte"

// Re-export components
export { Replace, Append, Prepend }

// Union type for all manipulations
export type Manipulation = ReplaceManipulation | AppendManipulation | PrependManipulation

function prepareInput(input:string): string {
  const stuffToReplace = [
    ["\\\\n", "\n"], ["\\\\t", "\t"] 
  ]

  let preparedInput = stuffToReplace.reduce((previousResult, currentValue, index, array) => {
    return previousResult.replaceAll(new RegExp(currentValue[0], "g"), currentValue[1])
  }, input)

  return preparedInput
}

// Function to apply manipulations
export function doManipulation(input: string, manipulation: Manipulation): string {
  switch (manipulation.type) {
    case "replace": {
      return input.replaceAll(new RegExp(manipulation.from, "g"), prepareInput(manipulation.to))
    }
    case "append": {
      return input + prepareInput(manipulation.suffix)
    }
    case "prepend": {
      return prepareInput(manipulation.prefix) + input
    }
  }
}
