<script lang="ts" context="module">
	import type { ManipulationBase } from '..';
	import RadioButton from '$lib/components/RadioButton.svelte';

	export interface CaseManipulation extends ManipulationBase {
		type: 'case';
		caseType: string;
	}

	const options = [
		{
			value: 'upper',
			label: 'Upper'
		},
		{
			value: 'lower',
			label: 'Lower'
		}
	];
</script>

<script lang="ts">
	export let { caseType }: CaseManipulation = { caseType: 'lower', type: 'case' };
</script>

<div>
	<span>Case </span>
	<RadioButton bind:selected={caseType} {options} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
