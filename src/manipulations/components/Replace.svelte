<script lang="ts" context="module">
  import type { ManipulationBase } from "..";

  export interface ReplaceManipulation extends ManipulationBase {
    type: "replace"
    from: string
    to: string
  }
</script>

<script lang="ts">
  export let { from, to }: ReplaceManipulation = {from: "", to: "", type: "replace"}
</script>

<div class="manipulation">
  <span>Replace from</span> <input bind:value={from} /> <span>to</span> <input bind:value={to} />
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--replace-bg-color);
    --manipulation-border-color: var(--replace-border-color);
  }
</style>
