<script lang="ts" module>
	import type { ManipulationBase } from '..';

	export interface PrependManipulation extends ManipulationBase {
		type: 'prepend';
		prefix: string;
	}
</script>

<script lang="ts">
	let { prefix = $bindable() }: { prefix: string } = $props();
</script>

<div>
	<span>Prefix </span><input bind:value={prefix} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
