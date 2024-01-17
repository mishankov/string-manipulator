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

<div class="manipulation">
  <span>Replace placeholder</span> <input bind:value={placeholder}> <span>in pattern</span> <textarea bind:value={pattern} />
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--compose-bg-color);
    --manipulation-border-color: var(--compose-border-color);
  }
</style>
