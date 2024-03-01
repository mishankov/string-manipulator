<script lang="ts">
    import { type TManipulation } from "../../manipulations";
    import Link from "../../components/Link.svelte";
    import ManipulationBlock from "./ManipulationBlock.svelte";

    interface ManipulationDoc {
        name: string,
        description: string,
        source: string,
        manipulation: TManipulation
    }
    
    const manipulationsDocs: ManipulationDoc[] = [
        {
            name: "Replace",
            description: "Replaces all occurencies of a string in another string",
            source: "I am your possible source",
            manipulation: {type: "replace", from: "source", to: "output"}
        }, 
        {
            name: "Prepend",
            description: "Add a string before given string",
            source: "Source",
            manipulation: {type: "prepend", prefix: "Best "}
        }, 
        {
            name: "Append",
            description: "Add a string after given string",
            source: "Source",
            manipulation: {type: "append", suffix: " -> output"}
        }
    ]

</script>

<div class="container">
    <div class="docs-row">
        <h1>Docs</h1>
        <Link link="/" isNavigation>Go to app</Link>
    </div>

    {#each manipulationsDocs as doc}
        <div class="docs-row"><h2>{doc.name}</h2></div>
        <div class="docs-row">
            <p>{doc.description}</p>
        </div>

        <div class="docs-row">
            <ManipulationBlock source={doc.source} manipulation={doc.manipulation}/>
        </div>
    {/each}
    
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