<script lang="ts" context="module">
    import { onMount, type ComponentType } from "svelte";
    import { get, writable } from "svelte/store";

    import urlStore from "./url-store";

    export interface Route {
        location: string
        component: ComponentType
    }

    export const routes = writable<Route[]>();
    export const currentRoute = writable<Route>();

    function pathWithBase(path: string): string {
        if (import.meta.env.BASE_URL === "/") return path
        return import.meta.env.BASE_URL + path
    }

    function currentLocation(pathname: string) {
      if (pathname === pathWithBase("/")) return pathname;
      if (pathname.endsWith("/")) return pathname.slice(0, pathname.length - 1);
      
      return pathname;
    };

    function getRoute(href: string, routes: Route[]): Route {
        const url = new URL(href);
        const route = routes.find(route => pathWithBase(route.location) === currentLocation(url.pathname)) || routes[0]
        return route
    }

    export function navigate(event: MouseEvent) {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement
        window.history.pushState('', '', target["href"]);
        const route = getRoute(target["href"], get(routes));
        currentRoute.set(route);
    };
</script>

<script lang="ts">
    onMount(() => {
        currentRoute.set(getRoute($urlStore.href, $routes));
    });

    $: currentRoute.set(getRoute($urlStore.href, $routes))
</script>

{#if $currentRoute}
    <svelte:component this={$currentRoute.component}/>
{/if}

