<script lang="ts">
	import type { TManipulation } from '..';
	import { Manipulation, AddManipulation } from '..';

	let { manipulations = $bindable() }: { manipulations: TManipulation[] } = $props();

	function handleManipulationDelete(id: string) {
		manipulations = manipulations.filter((manipulation) => {
			return manipulation.id !== id;
		});
	}
</script>

<div id="manipulations" class="manipulations">
	{#each manipulations as manipulation, i (manipulation.id)}
		<Manipulation bind:manipulation={manipulations[i]} ondelete={handleManipulationDelete} />
	{/each}
</div>

<AddManipulation bind:manipulations />

<style>
	.manipulations {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
