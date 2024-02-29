<script lang="ts">
  import Router, { type Route, routes } from "./components/Router.svelte";
  import App from "./pages/App.svelte";
  import Docs from "./pages/Docs.svelte"

  routes.set([
    { location: "/", component: App },
    { location: "/docs", component: Docs }
  ])
</script>

<Router />
