<script lang="ts">
  import type { TManipulation } from "./manipulations";
  import { Manipulation } from "./manipulations";

  export let manipulations: TManipulation[] = []

  function onNewManipulationSelect(event: Event) {
    const target = event.target as HTMLSelectElement
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
      case "splitGetFromIndex":
        manipulations.push({
          type: "splitGetFromIndex", splitString: "", index: 0
        })
        break
      case "compose":
        manipulations.push({
          type: "compose", pattern: "{}", placeholder: "{}"
        })
        break
      case "slice":
        manipulations.push({
          type: "slice", start: 0, end: -1
        })
        break
      case "splitCompose":
        manipulations.push({
          type: "splitCompose", splitString: "!", placeholder: "{d}", pattern: "{1}, {0}"
        })
        break
    }
    
    manipulations = manipulations
    target.value = "add"
  }

  // $: console.log(manipulations)
</script>

<div class="panel">
  <label for="manipulations">Manipulations</label>

  <div id="manipulations" class="manipulations">
    {#each manipulations as manipulation}
        <Manipulation bind:manipulation={manipulation} />
    {/each}
  </div>

  <select on:change={onNewManipulationSelect}>
    <option value="add">Add</option>
    <option value="replace">Replace</option>
    <option value="append">Append</option>
    <option value="prepend">Prepend</option>
    <option value="splitGetFromIndex">Split, get from index</option>
    <option value="compose">Compose</option>
    <option value="slice">Slice</option>
    <option value="splitCompose">Split-compose</option>
  </select>
</div>


<style>
  .manipulations, .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>