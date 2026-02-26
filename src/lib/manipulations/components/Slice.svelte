<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface SliceManipulation extends ManipulationBase {
		type: 'slice';
		start: number;
		end: number;
	}
</script>

<script lang="ts">
	let {
		start = $bindable(),
		end = $bindable()
	}: {
		start: number;
		end: number;
	} = $props();
</script>

<div>
	<span>Slice from</span> <input bind:value={start} type="number" /> <span>to</span>
	<input bind:value={end} type="number" />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
