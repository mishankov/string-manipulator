<script lang="ts" context="module">
  export interface SplitGetFromIndexManipulation {
    type: "splitGetFromIndex"
    splitString: string
    index: number
  }
</script>

<script lang="ts">
  export let { splitString, index }: SplitGetFromIndexManipulation = {splitString: "", index: 0, type: "splitGetFromIndex"}
</script>

<div>
  <span>Split by </span><input bind:value={splitString} /><span>, get from </span><input bind:value={index} />
</div>
