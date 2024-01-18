<script lang="ts">
  import  { type TManipulation, applyManipulations } from "./manipulations";
  import ManipulationsPanel from "./ManipulationsPanel.svelte";
  
  import TextArea from "./components/TextArea.svelte";

  let source = "Try me!\nPress \"Apply\""
  let result = ""
  let manipulations: TManipulation[] = [{
    type: "replace",
    from: "\\n", to: "--", id: "initial"
  }]

  function onApply(event: MouseEvent) {
    if (event.type == "click") {
      result = applyManipulations(source, manipulations)
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "Enter") {
      result = applyManipulations(source, manipulations)
    }
  })

  $: result = applyManipulations(source, manipulations)
</script>

<div class="panels">
  <div class="panel">
    <TextArea id="source" labelText="Source" bind:value={source} />
  </div>
  
  <div class="panel">
    <TextArea id="result" labelText="Result" bind:value={result} />
  </div>

  <div class="panel">
    <ManipulationsPanel bind:manipulations />
    <!-- <button on:click={onApply}>Apply</button> -->
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
</style>