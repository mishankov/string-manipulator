<script lang="ts" context="module">
  export interface PrependManipulation {
    type: "prepend"
    prefix: string
  }
</script>

<script lang="ts">
  export let { prefix }: PrependManipulation = { prefix: "", type: "prepend"}
</script>

<div class="manipulation">
  <span>Prefix </span><input bind:value={prefix} />
</div>

<style>
  .manipulation {
    --manipulation-bg-color: var(--prepend-bg-color);
    --manipulation-border-color: var(--prepend-border-color);
  }
</style>
