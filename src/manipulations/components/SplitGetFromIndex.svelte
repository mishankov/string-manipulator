<script lang="ts" context="module">
  import type { ManipulationBase } from "..";

  export interface SplitGetFromIndexManipulation extends ManipulationBase {
    type: "splitGetFromIndex"
    splitString: string
    index: number
  }
</script>

<script lang="ts">
  export let { splitString, index }: SplitGetFromIndexManipulation = {splitString: "", index: 0, type: "splitGetFromIndex"}
</script>

<div class="manipulation">
  <span>Split by </span><input bind:value={splitString} /><span>, get from </span><input bind:value={index} />
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--splitGetFromIndex-bg-color);
    --manipulation-border-color: var(--splitGetFromIndex-border-color);
  }
</style>
