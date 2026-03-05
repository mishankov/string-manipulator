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

	let localSource = $state(source);
	let localManipulation = $state(cloneManipulation(manipulation));

	$effect(() => {
		localSource = source;
		localManipulation = cloneManipulation(manipulation);
	});

	let result = $derived(applyManipulations(localSource, [localManipulation]));
</script>

<div>
	<TextArea bind:value={localSource} />
	<Manipulation bind:manipulation={localManipulation} />
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
