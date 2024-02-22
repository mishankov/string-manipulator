<script lang="ts" context="module">
  import type { InnerSplitJoinManipulation, ManipulationBase } from ".."

  export interface SplitJoinManipulation extends ManipulationBase {
    type: "splitJoin"
    splitString: string
    joinString: string
    innerManipulations: InnerSplitJoinManipulation[]
  }
</script>

<script lang="ts">
  import { ManipulationsList } from "..";

  export let { splitString, joinString, innerManipulations }: SplitJoinManipulation = {splitString: "", joinString: "", innerManipulations: [], type: "splitJoin"}
</script>

<div class="manipulation">
  <div class="header">
    <span>Split by</span> <input bind:value={splitString} />
  </div>

  <div class="inner-manipulations">
    <ManipulationsList bind:manipulations={innerManipulations}/>
  </div>
  
  <div class="footer">
    <span>Join on</span> <input bind:value={joinString} />
  </div>
  
</div>

<style>
  .manipulation {
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