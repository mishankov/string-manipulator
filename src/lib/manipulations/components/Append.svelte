<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface AppendManipulation extends ManipulationBase {
		type: 'append';
		suffix: string;
	}
</script>

<script lang="ts">
	let { suffix = $bindable() }: { suffix: string } = $props();
</script>

<div>
	<span>Suffix </span><input bind:value={suffix} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
