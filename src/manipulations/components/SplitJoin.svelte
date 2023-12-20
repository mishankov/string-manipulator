<script lang="ts" context="module">
  import { type InnerSplitJoinManipulation } from ".."
  import { Manipulation, AddManipulation } from ".."

  export interface SplitJoinManipulation {
    type: "splitJoin"
    splitString: string
    joinString: string
    innerManipulations: InnerSplitJoinManipulation[]
  }
</script>

<script lang="ts">
  export let { splitString, joinString, innerManipulations }: SplitJoinManipulation = {splitString: "", joinString: "", innerManipulations: [], type: "splitJoin"}
</script>

<div>
  <span>Split by</span> <input bind:value={splitString} />
  {#each innerManipulations as manipulation}
    <Manipulation bind:manipulation={manipulation} /> 
  {/each}
  <AddManipulation bind:manipulations={innerManipulations} />
  <span>Join on</span> <input bind:value={joinString} />
</div>
