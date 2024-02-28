<script lang="ts">
  import Router, { type IRouter } from "./components/Router.svelte";
  import App from "./pages/App.svelte";
  import Docs from "./pages/Docs.svelte"

  const routes: IRouter[] = [
    { location: "/", component: App },
    { location: "/docs", component: Docs }
  ]
</script>

<Router {routes} defaultComponent={App}/>
