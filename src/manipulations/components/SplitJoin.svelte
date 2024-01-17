<script lang="ts" context="module">
  import type { InnerSplitJoinManipulation, ManipulationBase } from ".."
  import { Manipulation, AddManipulation } from ".."

  export interface SplitJoinManipulation extends ManipulationBase {
    type: "splitJoin"
    splitString: string
    joinString: string
    innerManipulations: InnerSplitJoinManipulation[]
  }
</script>

<script lang="ts">
  export let { splitString, joinString, innerManipulations }: SplitJoinManipulation = {splitString: "", joinString: "", innerManipulations: [], type: "splitJoin"}
</script>

<div class="manipulation">
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
  .manipulation {
    --manipulation-bg-color: var(--splitJoin-bg-color);
    --manipulation-border-color: var(--splitJoin-border-color);

    display: flex;
    flex-direction: column;
    gap: 10px;

    /* border: 2px solid black; */
    padding: 5px;
  }

  .inner-manipulations {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    padding-left: 10px;
  }
</style>