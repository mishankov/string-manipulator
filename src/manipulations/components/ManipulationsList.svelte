<script lang="ts">
  import type { TManipulation } from "..";
  import { Manipulation, AddManipulation } from "..";

  export let manipulations: TManipulation[] = []

  function handleManipulationDelete(event: CustomEvent) {
    manipulations = manipulations.filter((manipulation) => {
      return manipulation.id !== event.detail.id
    })
  }
</script>

<div id="manipulations" class="manipulations">
  {#each manipulations as manipulation (manipulation.id)}
      <Manipulation bind:manipulation={manipulation} on:delete={handleManipulationDelete}/>
  {/each}
</div>

<AddManipulation bind:manipulations={manipulations} />

<style>
  .manipulations {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>