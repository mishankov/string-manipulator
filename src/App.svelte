<script lang="ts">
  import { type Manipulator, ReplaceManipulator } from "./manipulator";
  import type { Manipulation } from "./manipulations";
  import ManipulationsPanel from "./ManipulationsPanel.svelte";
  

  let source = "Try me!\nPress \"Apply\""
  let result = ""
  let manipulations: Manipulation[] = [{
    type: "replace",
    from: "\\n", to: "--"
  }]

  function applyManipulators(source: string, manipulators?: Manipulator[]) {
    if (!manipulators) {
      return source
    }

    return manipulators.reduce((previousResult, currentManipulator) => {
      return currentManipulator.do(previousResult)
    }, source)
  }

  function applyManipulations(event: MouseEvent) {
    console.log(manipulations)
    
    if (event.type == "click") {
      result = applyManipulators(source, manipulations.map((manipulation, index, array) => {
        switch (manipulation.type){
          case "replace": return new ReplaceManipulator(manipulation.from, manipulation.to)
        }
      }))
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