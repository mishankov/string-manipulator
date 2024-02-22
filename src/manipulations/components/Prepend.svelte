<script lang="ts" context="module">
  import type { ManipulationBase } from "..";

  export interface PrependManipulation extends ManipulationBase {
    type: "prepend"
    prefix: string
  }
</script>

<script lang="ts">
  export let { prefix }: PrependManipulation = { prefix: "", type: "prepend"}
</script>

<div>
  <span>Prefix </span><input bind:value={prefix} />
</div>

