<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { type TManipulation } from "..";
  import { Replace, Append, Prepend, SplitGetFromIndex, Compose, Slice, SplitCompose, SplitJoin } from "..";

  export let manipulation: TManipulation

  const dispatch = createEventDispatcher()

  function sendDeleteEvent() {
    console.log(`Sendind delete event for ${manipulation.id}`)
    dispatch("delete", {
      id: manipulation.id
    })
  }
</script>

<div>
  {#if manipulation.type == "replace"}
    <Replace bind:from={manipulation.from} bind:to={manipulation.to}/>
  {:else if manipulation.type == "prepend"}
    <Prepend bind:prefix={manipulation.prefix} />
  {:else if manipulation.type == "append"}
    <Append bind:suffix={manipulation.suffix} />
  {:else if manipulation.type == "splitGetFromIndex"}
    <SplitGetFromIndex bind:splitString={manipulation.splitString} bind:index={manipulation.index} />
  {:else if manipulation.type == "compose"}
    <Compose bind:pattern={manipulation.pattern} bind:placeholder={manipulation.placeholder} />
  {:else if manipulation.type == "slice"}
    <Slice bind:start={manipulation.start} bind:end={manipulation.end} />
  {:else if manipulation.type == "splitCompose"}
    <SplitCompose bind:splitString={manipulation.splitString} bind:pattern={manipulation.pattern} bind:placeholder={manipulation.placeholder} />
  {:else if manipulation.type == "splitJoin"}
    <SplitJoin bind:splitString={manipulation.splitString} bind:joinString={manipulation.joinString} bind:innerManipulations={manipulation.innerManipulations}/>
  {/if}
  <button on:click={sendDeleteEvent}>x</button>
</div>

<style>
  :global(.manipulation) {
    /* default colors */
    --manipulation-bg-color: grey;
    --manipulation-border-color: white;

    padding: 10px;
    background-color: var(--manipulation-bg-color);
    border: 2px solid var(--manipulation-border-color);
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
</style>
