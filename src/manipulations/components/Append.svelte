<script lang="ts" context="module">
  export interface AppendManipulation {
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
