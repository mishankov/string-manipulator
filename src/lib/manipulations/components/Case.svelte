<script lang="ts" module>
	import type { ManipulationBase } from '..';

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
	import RadioButton from '$lib/components/RadioButton.svelte';

	let {
		caseType = $bindable()
	}: {
		caseType: string;
	} = $props();
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
