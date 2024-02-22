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

<div>
  <span>Replace from</span> <input bind:value={from} /> <span>to</span> <input bind:value={to} />
</div>
