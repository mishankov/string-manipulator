<script lang="ts" context="module">
  import type { ManipulationBase } from "..";

  export interface AppendManipulation extends ManipulationBase {
    type: "append"
    suffix: string
  }
</script>

<script lang="ts">
  export let { suffix }: AppendManipulation = { suffix: "", type: "append"}
</script>

<div>
  <span>Suffix </span><input bind:value={suffix} />
</div>
