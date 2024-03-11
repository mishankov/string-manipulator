<script lang="ts">
  interface Option {
    value: string;
    label: string;
  }

  export let options: Option[];
  export let selected: string;
</script>

{#each options as option}
  <label>
    <input type="radio" bind:group={selected} value={option.value} />
    {option.label}
  </label>
{/each}
