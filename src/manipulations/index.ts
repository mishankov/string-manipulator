import { type ReplaceManipulation } from "./components/Replace.svelte";

export type Manipulation = ReplaceManipulation

export function doManipulation(input: string, manipulation: Manipulation): string {
  switch (manipulation.type) {
    case "replace": {
      return input.replaceAll(new RegExp(manipulation.from, "g"), manipulation.to)
    }
  }
}
