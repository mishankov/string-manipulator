<script lang="ts" context="module">
  export interface SplitComposeManipulation {
    type: "splitCompose"
    splitString: string
    placeholder: string
    pattern: string
  }
</script>

<script lang="ts">
  export let { splitString, pattern, placeholder }: SplitComposeManipulation = { splitString: ",", pattern: "{1}, {0}", placeholder: "{d}", type: "splitCompose"}
</script>

<div class="manipulation">
  <span>Split by</span> <input bind:value={splitString}/> <span> and replace placeholder</span> <input bind:value={placeholder} /> <span>in pattern</span> <textarea bind:value={pattern} />
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--splitCompose-bg-color);
    --manipulation-border-color: var(--splitCompose-border-color);
  }
</style>
