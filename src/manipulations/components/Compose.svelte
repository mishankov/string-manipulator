<script lang="ts" context="module">
  import type { ManipulationBase } from "..";
  
  export interface ComposeManipulation extends ManipulationBase {
    type: "compose"
    pattern: string
    placeholder: string
  }
</script>

<script lang="ts">
  export let { pattern, placeholder }: ComposeManipulation = { pattern: "", placeholder: "{}", type: "compose"}
</script>

<div>
  <span>Replace placeholder</span> <input bind:value={placeholder}> <span>in pattern</span> <textarea bind:value={pattern} />
</div>
