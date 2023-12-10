<script lang="ts" context="module">
  export interface PrependManipulation {
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
