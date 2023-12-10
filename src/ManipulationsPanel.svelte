<script lang="ts">
  import type { Manipulation } from "./manipulations";
  import { Replace, Append, Prepend } from "./manipulations";

  export let manipulations: Manipulation[] = []

  function onNewManipulationSelect(event: Event) {
    const target = event.target as HTMLSelectElement
    console.log(target.value)
    switch (target.value) {
      case "replace": 
        manipulations.push({
          type: "replace", from: "", to: ""
        })
        break
      case "append": 
        manipulations.push({
          type: "append", suffix: ""
        })
        break
      case "prepend": 
        manipulations.push({
          type: "prepend", prefix: ""
        })
        break
    }
    
    manipulations = manipulations
    target.value = "add"
  }

  $: console.log(manipulations)
</script>

<div>
  <label for="manipulations">Manipulations</label>

  <div id="manipulations" class="manipulations">
    {#each manipulations as manipulation}
        {#if manipulation.type == "replace"}
          <Replace bind:from={manipulation.from} bind:to={manipulation.to}/>
        {:else if manipulation.type == "prepend"}
          <Prepend bind:prefix={manipulation.prefix} />
        {:else if manipulation.type == "append"}
          <Append bind:suffix={manipulation.suffix} />
        {/if}
    {/each}
  </div>

  <select on:change={onNewManipulationSelect}>
    <option value="add">Add</option>
    <option value="replace">Replace</option>
    <option value="append">Append</option>
    <option value="prepend">Prepend</option>
  </select>
</div>
