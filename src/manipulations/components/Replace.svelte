<script lang="ts" context="module">
  export interface ReplaceManipulation {
    type: "replace"
    from: string
    to: string
  }
</script>

<script lang="ts">
  export let { from, to }: ReplaceManipulation = {from: "", to: "", type: "replace"}
</script>

<div>
  <span>Replace from </span><input bind:value={from} /><span> to </span><input bind:value={to} />
</div>
