<script lang="ts" context="module">
    import type { ComponentType } from "svelte";

    export interface IRouter {
        location: string
        component: ComponentType
    }
</script>

<script lang="ts">
    export let routes: IRouter[];
    export let defaultComponent: ComponentType;
</script>

<svelte:component this={(routes.find(route => route.location === location.pathname) || {component: defaultComponent}).component}/>
