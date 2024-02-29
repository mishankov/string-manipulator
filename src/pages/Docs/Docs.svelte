<script lang="ts">
    import Link from "../../components/Link.svelte";
    import ManipulationBlock from "./ManipulationBlock.svelte";
</script>

<div class="container">
    <div class="docs-row">
        <h1>Docs</h1>
        <Link link="/" isNavigation>Go to app</Link>
    </div>

    <div class="docs-row"><h2>Replace</h2></div>
    <div class="docs-row">
        <p>Replaces all occurencies of a string in another string</p>
    </div>

    <div class="docs-row">
        <ManipulationBlock source="kek" manipulation={{type: "replace", from: "k", to: "l"}}/>
    </div>
    
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        padding-top: 10px;
    }

    .docs-row {
        display: flex;
        flex-direction: row;
        margin: auto;
        align-items: end;
        gap: 10px;
    }

    h2 {
        margin-top: 20px;
    }
</style>