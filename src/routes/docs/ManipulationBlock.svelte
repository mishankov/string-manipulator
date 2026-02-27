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
		display: flex;
		flex-direction: row;
		gap: 10px;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		div {
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
