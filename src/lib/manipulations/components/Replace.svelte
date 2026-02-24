<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface ReplaceManipulation extends ManipulationBase {
		type: 'replace';
		from: string;
		to: string;
	}
</script>

<script lang="ts">
	let {
		from = $bindable(),
		to = $bindable()
	}: {
		from: string;
		to: string;
	} = $props();
</script>

<div>
	<span>Replace from</span> <input bind:value={from} /> <span>to</span> <input bind:value={to} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
