<script lang="ts">
	import { base } from '$app/paths';
	import type { Snippet } from 'svelte';
	let { link, children }: { link: string; children: Snippet } = $props();
</script>

<a href="{base}{link}">{@render children()}</a>

<style>
	a {
		font-family: monospace;
	}
</style>
