<script lang="ts" context="module">
  import { type InnerSplitJoinManipulation } from ".."

  export interface SplitJoinManipulation {
    type: "splitJoin"
    splitString: string
    joinString: string
    innerManupilations: InnerSplitJoinManipulation[]
  }
</script>

<script lang="ts">
  export let { splitString, joinString, innerManupilations }: SplitJoinManipulation = {splitString: "", joinString: "", innerManupilations: [], type: "splitJoin"}
</script>

<div>
  <span>Split by</span> <input bind:value={splitString} />
  <span>Join on</span> <input bind:value={joinString} />
</div>
