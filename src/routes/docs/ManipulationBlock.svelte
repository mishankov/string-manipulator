<script lang="ts">
	import TextArea from '$lib/components/TextArea.svelte';
	import Manipulation from '$lib/manipulations/components/Manipulation.svelte';

	import { type TManipulation, applyManipulations } from '$lib/manipulations';

	let {
		manipulation,
		source
	}: {
		manipulation: TManipulation;
		source: string;
	} = $props();

	function cloneManipulation(value: TManipulation): TManipulation {
		return JSON.parse(JSON.stringify(value)) as TManipulation;
	}

	let localSource = $state('');
	let localManipulation = $state<TManipulation | null>(null);

	$effect(() => {
		localSource = source;
		localManipulation = cloneManipulation(manipulation);
	});

	let result = $derived(
		localManipulation ? applyManipulations(localSource, [localManipulation]) : localSource
	);
</script>

<div>
	<TextArea bind:value={localSource} />
	{#if localManipulation}
		<Manipulation bind:manipulation={localManipulation} />
	{/if}
	<TextArea bind:value={result} />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 10px;
	}

	@media (max-width: 768px) {
		div {
			grid-template-columns: 1fr;
			gap: 8px;
		}
	}
</style>
