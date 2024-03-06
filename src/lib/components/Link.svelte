<script lang="ts">
	import { base } from '$app/paths';
	export let link: string;
</script>

<a href="{base}{link}"><slot /></a>

<style>
	a {
		font-family: monospace;
	}
</style>
