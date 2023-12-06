<script lang="ts">
  import type { Manipulation } from "./manipulations";
  import Replace from "./manipulations/components/Replace.svelte";

  export let manipulations: Manipulation[] = []

  function addManipulation(event: MouseEvent) {
    manipulations.push({
      type: "replace", from: "", to: ""
    })

    manipulations = manipulations
  }

</script>

<div>
  <label for="manipulations">Manipulations</label>
  <div id="manipulations" class="manipulations">
    {#each manipulations as manipulation}
        {#if manipulation.type == "replace"}
          <Replace bind:from={manipulation.from} bind:to={manipulation.to}/>
        {/if}
    {/each}
  </div>
  <button on:click={addManipulation}>Add</button>
</div>
