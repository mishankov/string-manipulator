<script lang="ts">
  import Router, { type Route, routes } from "./components/Router.svelte";
  import App from "./pages/App";
  import Docs from "./pages/Docs";

  routes.set([
    { location: "/", component: App },
    { location: "/docs", component: Docs }
  ])
</script>

<Router />
