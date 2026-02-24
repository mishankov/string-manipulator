<script lang="ts">
	import { type TManipulation, applyManipulations } from '$lib/manipulations';
	import ManipulationsPanel from './ManipulationsPanel.svelte';

	import TextArea from '$lib/components/TextArea.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Link from '$lib/components/Link.svelte';
	import { onMount } from 'svelte';

	let source = $state('Try me!\nResult will be updated automatically');
	let manipulations: TManipulation[] = $state([
		{
			type: 'replace',
			from: '\\n',
			to: ' -- ',
			id: 'initial'
		}
	]);

	let mounted = $state(false);

	let result = $derived(applyManipulations(source, manipulations));

	$effect(() => {
		if (mounted) {
			const j = JSON.stringify(manipulations);
			const b64 = btoa(encodeURIComponent(j));

			const url = new URL(window.location.href);
			url.searchParams.set('manipulations', b64);
			window.history.pushState({}, '', url.toString());
		}
	});

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);

		console.log(urlParams);

		const encoded = urlParams.get('manipulations');
		console.log(encoded);
		if (encoded) {
			try {
				const jsonStr = decodeURIComponent(atob(encoded));
				console.log(jsonStr);
				const parsed = JSON.parse(jsonStr) as TManipulation[];
				console.log(parsed);
				if (parsed) {
					manipulations = parsed;
				}
			} catch (e) {
				console.error('Failed to load manipulations from URL:', e);
			}
		}
		mounted = true;
	});
</script>

<div class="panels">
	<div class="panel">
		<Heading text="Source" />
		<TextArea id="source" bind:value={source} />
	</div>

	<div class="panel">
		<div class="header-with-link">
			<Heading text="Manipulations" />
			<Link link="/docs">Docs</Link>
		</div>
		<ManipulationsPanel bind:manipulations />
	</div>

	<div class="panel">
		<Heading text="Result" />
		<TextArea id="result" bind:value={result} />
	</div>
</div>

<style>
	.panels {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 10px;

		padding: 10px;
	}

	.panel {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.header-with-link {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: end;
	}
</style>
