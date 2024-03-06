<script lang="ts">
	import TextArea from '$lib/components/TextArea.svelte';
	import Manipulation from '$lib/manipulations/components/Manipulation.svelte';

	import { type TManipulation, applyManipulations } from '$lib/manipulations';

	export let manipulation: TManipulation;
	export let source: string;

	let result: string;

	$: result = applyManipulations(source, [manipulation]);
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
	}
</style>
