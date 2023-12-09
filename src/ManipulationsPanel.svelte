<script lang="ts">
    import type { ChangeEventHandler } from "svelte/elements";
  import type { Manipulation } from "./manipulations";
  import Replace from "./manipulations/components/Replace.svelte";

  export let manipulations: Manipulation[] = []

  let newManipulationSelect = ""

  function addManipulation(event: MouseEvent) {
    manipulations.push({
      type: "replace", from: "", to: ""
    })

    manipulations = manipulations
  }

  function onNewManipulationSelect(event: Event) {
    const target = event.target as HTMLSelectElement
    console.log(target.value)
    if (target.value == "replace") {
      manipulations.push({
        type: "replace", from: "", to: ""
      })
    }
    
    manipulations = manipulations
    target.value = "add"
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
  <select on:change={onNewManipulationSelect}>
    <option value="add">Add</option>
    <option value="replace">Replace</option>
  </select>
  <button on:click={addManipulation}>Add</button>
</div>
