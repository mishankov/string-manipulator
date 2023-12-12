<script lang="ts">
  import  { type Manipulation, doManipulation } from "./manipulations";
  import ManipulationsPanel from "./ManipulationsPanel.svelte";
  

  let source = "Try me!\nPress \"Apply\""
  let result = ""
  let manipulations: Manipulation[] = [{
    type: "replace",
    from: "\\n", to: "--"
  }]

  function applyManipulations(source: string, manipulations: Manipulation[]): string {
    return manipulations.reduce((previousResult, curentManipulation) => {
        return doManipulation(previousResult, curentManipulation)
    }, source)
  }

  function onApply(event: MouseEvent) {
    if (event.type == "click") {
      result = applyManipulations(source, manipulations)
    }
  }

  $: result = applyManipulations(source, manipulations)
</script>

<div class="panels">
  <div class="panel">
    <label for="source">Source</label>
    <textarea id="source" bind:value={source}/>
  </div>
  
  <div class="panel">
    <label for="result">Result</label>
    <textarea id="result" bind:value={result}/>
  </div>

  <div class="panel">
    <ManipulationsPanel bind:manipulations />
    <button on:click={onApply}>Apply</button>
  </div>
  
</div>


<style>
  .panels {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  textarea {
    height: 500px;
    width: 300px;
  }
</style>