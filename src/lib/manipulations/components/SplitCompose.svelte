<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface SplitComposeManipulation extends ManipulationBase {
		type: 'splitCompose';
		splitString: string;
		placeholder: string;
		pattern: string;
	}
</script>

<script lang="ts">
	let {
		splitString = $bindable(),
		pattern = $bindable(),
		placeholder = $bindable()
	}: {
		splitString: string;
		pattern: string;
		placeholder: string;
	} = $props();
</script>

<div>
	<span>Split by</span> <input bind:value={splitString} /> <span>and replace placeholder</span>
	<input bind:value={placeholder} /> <span>in pattern</span>
	<textarea bind:value={pattern}></textarea>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
