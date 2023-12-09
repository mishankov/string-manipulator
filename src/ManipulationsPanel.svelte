<script lang="ts">
  import type { Manipulation } from "./manipulations";
    import Append from "./manipulations/components/Append.svelte";
  import Replace from "./manipulations/components/Replace.svelte";

  export let manipulations: Manipulation[] = []

  let newManipulationSelect = ""

  function onNewManipulationSelect(event: Event) {
    const target = event.target as HTMLSelectElement
    
    switch (target.value) {
      case "replace": manipulations.push({
        type: "replace", from: "", to: ""
      })
      case "append": manipulations.push({
        type: "append", suffix: ""
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
        {:else if manipulation.type == "append"}
          <Append bind:suffix={manipulation.suffix} />
        {/if}
    {/each}
  </div>
  <select on:change={onNewManipulationSelect}>
    <option value="add">Add</option>
    <option value="replace">Replace</option>
    <option value="append">Append</option>
  </select>
</div>
