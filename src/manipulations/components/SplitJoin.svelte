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

<div class="this">
  <div class="header">
    <span>Split by</span> <input bind:value={splitString} />
  </div>

  <div class="inner-manipulations">
    {#each innerManipulations as manipulation}
      <Manipulation bind:manipulation={manipulation} /> 
    {/each}
    <AddManipulation bind:manipulations={innerManipulations} />
  </div>
  
  <div class="footer">
    <span>Join on</span> <input bind:value={joinString} />
  </div>
  
</div>

<style>
  .this {
    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 2px solid black;
    padding: 5px;
  }

  .inner-manipulations {
    padding-left: 10px;
  }
</style>