<script lang="ts" context="module">
	import type { ManipulationBase } from '..';
	import RadioButton from '$lib/components/RadioButton.svelte';

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
	export let { trimType }: TrimManipulation = { trimType: 'all', type: 'trim' };
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
