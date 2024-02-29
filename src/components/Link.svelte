<script lang="ts">
    import { navigate } from "./Router.svelte";

    export let link: string;
    export let isNavigation = false
</script>

{#if isNavigation}
    <a href="{link}" on:click={navigate}><slot/></a>
{:else}
    <a href="{link}"><slot/></a>
{/if}


<style>
    a {
        font-family: monospace;
    }
</style>
