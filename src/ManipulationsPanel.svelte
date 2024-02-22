<script lang="ts">
  import type { TManipulation } from "./manipulations";
  import { ManipulationsList } from "./manipulations";

  export let manipulations: TManipulation[] = []
</script>

<div class="panel">
  <ManipulationsList bind:manipulations/>
</div>


<style>
  .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>