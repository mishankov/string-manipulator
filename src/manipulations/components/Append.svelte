<script lang="ts" context="module">
  export interface AppendManipulation {
    type: "append"
    suffix: string
  }
</script>

<script lang="ts">
  export let { suffix }: AppendManipulation = { suffix: "", type: "append"}
</script>

<div class="manipulation">
  <span>Suffix </span><input bind:value={suffix} />
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--append-bg-color);
    --manipulation-border-color: var(--append-border-color);
  }
</style>
