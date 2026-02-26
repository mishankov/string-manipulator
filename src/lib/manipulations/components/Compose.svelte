<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface ComposeManipulation extends ManipulationBase {
		type: 'compose';
		pattern: string;
		placeholder: string;
	}
</script>

<script lang="ts">
	let {
		pattern = $bindable(),
		placeholder = $bindable()
	}: {
		pattern: string;
		placeholder: string;
	} = $props();
</script>

<div>
	<span>Replace placeholder</span> <input bind:value={placeholder} /> <span>in pattern</span>
	<textarea bind:value={pattern}></textarea>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
