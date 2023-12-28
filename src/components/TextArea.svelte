<script lang="ts">
  export let value = ""
  export let id = "ta"
  export let labelText = ""
</script>

{#if labelText !== ""}
  <label for="{id}">Source</label>
{/if}

<textarea id="{id}" bind:value={value}/>

<style>
  textarea {
    height: 500px;
    width: 300px;
    background-color: var(--bg-color-110);
    color: var(--text-color);
    border-radius: 10px;
    border: 1px solid var(--bg-color-90);
    padding: 10px;
  }

  textarea:focus {
    outline: none;
    background-color: var(--bg-color-120);
  }
</style>
