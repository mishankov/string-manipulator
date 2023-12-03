<script lang="ts">
  import { type Manipulator, ReplaceManipulator } from "./manipulator";
  import Replace from "./components/manipulations/Replace.svelte";

  let source = ""
  let result = ""

  function applyManipulators(source: string, manipulators?: Manipulator[]) {
    if (!manipulators) {
      return source
    }

    return manipulators.reduce((previousResult, currentManipulator) => {
      return currentManipulator.do(previousResult)
    }, source)
  }

  $: result = applyManipulators(source, [new ReplaceManipulator("\n", " - ")])
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
    <label for="manipulations">Manipulations</label>
    <div id="manipulations" class="manipulations">
      <Replace />
    </div>
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