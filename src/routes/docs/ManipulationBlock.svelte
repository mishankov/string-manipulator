<script lang="ts">
	import TextArea from '$lib/components/TextArea.svelte';
	import Manipulation from '$lib/manipulations/components/Manipulation.svelte';

	import { type TManipulation, applyManipulations } from '$lib/manipulations';

	let {
		manipulation = $bindable(),
		source = $bindable()
	}: {
		manipulation: TManipulation;
		source: string;
	} = $props();

	let result = $derived(applyManipulations(source, [manipulation]));
</script>

<div>
	<TextArea bind:value={source} />
	<Manipulation bind:manipulation />
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
