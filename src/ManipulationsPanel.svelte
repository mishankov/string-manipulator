<script lang="ts">
  import type { TManipulation } from "./manipulations";
  import { Manipulation, AddManipulation } from "./manipulations";

  export let manipulations: TManipulation[] = []

  function handleManipulationDelete(event: CustomEvent) {
    manipulations = manipulations.filter((manipulation) => {
      return manipulation.id !== event.detail.id
    })
  }
  // $: console.log(manipulations)
</script>

<div class="panel">
  <label for="manipulations">Manipulations</label>

  <div id="manipulations" class="manipulations">
    {#each manipulations as manipulation (manipulation.id)}
        <Manipulation bind:manipulation={manipulation} on:delete={handleManipulationDelete}/>
    {/each}
  </div>

  <AddManipulation bind:manipulations={manipulations} />
</div>


<style>
  .manipulations, .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>