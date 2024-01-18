<script lang="ts">
  import type { TManipulation } from "./manipulations";
  import { ManipulationsList } from "./manipulations";

  export let manipulations: TManipulation[] = []
  // $: console.log(manipulations)
</script>

<div class="panel">
  <label for="manipulations">Manipulations</label>
  <ManipulationsList bind:manipulations/>
</div>


<style>
  .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>