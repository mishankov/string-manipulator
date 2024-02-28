<script lang="ts">
    export let link: string;
</script>

<a href="{link}"><slot/></a>

<style>
    a {
        font-family: monospace;
    }
</style>
