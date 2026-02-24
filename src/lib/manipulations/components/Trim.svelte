<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface TrimManipulation extends ManipulationBase {
		type: 'trim';
		trimType: string;
	}

	const options = [
		{
			value: 'leading',
			label: 'Leading'
		},
		{
			value: 'trailing',
			label: 'Trailing'
		},
		{
			value: 'all',
			label: 'All'
		}
	];
</script>

<script lang="ts">
	import RadioButton from '$lib/components/RadioButton.svelte';

	let { trimType = $bindable() }: { trimType: string } = $props();
</script>

<div>
	<span>Trim </span>
	<RadioButton bind:selected={trimType} {options} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
