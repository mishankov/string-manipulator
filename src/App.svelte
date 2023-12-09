<script lang="ts">
  import  { type Manipulation, doManipulation } from "./manipulations";
  import ManipulationsPanel from "./ManipulationsPanel.svelte";
  

  let source = "Try me!\nPress \"Apply\""
  let result = ""
  let manipulations: Manipulation[] = [{
    type: "replace",
    from: "\\n", to: "--"
  }]

  function applyManipulations(event: MouseEvent) {
    console.log(manipulations)
    
    if (event.type == "click") {
      result = manipulations.reduce((previousResult, curentManipulation) => {
        return doManipulation(previousResult, curentManipulation)
      }, source)
    }
  }

  // $: result = applyManipulators(source, [new ReplaceManipulator("\n", " - ")])
</script>

<div class="panels">
  <div id="panel">
    <label for="source">Source</label>
    <textarea id="source" bind:value={source}/>
  </div>
  
  <div id="panel">
    <label for="result">Result</label>
    <textarea id="result" bind:value={result}/>
  </div>

  <div id="panel">
    <ManipulationsPanel bind:manipulations />
    <button on:click={applyManipulations}>Apply</button>
  </div>
  
</div>


<style>
  .panels {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }
</style>