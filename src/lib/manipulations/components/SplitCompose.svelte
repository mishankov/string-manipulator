<script lang="ts" context="module">
  import type { ManipulationBase } from "..";

  export interface SplitComposeManipulation extends ManipulationBase {
    type: "splitCompose"
    splitString: string
    placeholder: string
    pattern: string
  }
</script>

<script lang="ts">
  export let { splitString, pattern, placeholder }: SplitComposeManipulation = { splitString: ",", pattern: "{1}, {0}", placeholder: "{d}", type: "splitCompose"}
</script>

<div>
  <span>Split by</span> <input bind:value={splitString}/> <span>and replace placeholder</span> <input bind:value={placeholder} /> <span>in pattern</span> <textarea bind:value={pattern} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
