<script lang="ts" context="module">
  export interface SliceManipulation {
    type: "slice"
    start: number
    end: number
  }
</script>

<script lang="ts">
  export let { start, end }: SliceManipulation = { start: 0, end: -1, type: "slice"}
</script>

<div class="manipulation">
  <span>Slice from</span> <input bind:value={start} type="number"/> <span>to</span> <input bind:value={end} type="number" /> 
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--slice-bg-color);
    --manipulation-border-color: var(--slice-border-color);
  }
</style>

