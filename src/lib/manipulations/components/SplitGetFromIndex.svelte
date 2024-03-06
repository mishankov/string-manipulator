<script lang="ts" context="module">
	import type { ManipulationBase } from '..';

	export interface SplitGetFromIndexManipulation extends ManipulationBase {
		type: 'splitGetFromIndex';
		splitString: string;
		index: number;
	}
</script>

<script lang="ts">
	export let { splitString, index }: SplitGetFromIndexManipulation = {
		splitString: '',
		index: 0,
		type: 'splitGetFromIndex'
	};
</script>

<div>
	<span>Split by </span><input bind:value={splitString} /><span>get from </span><input
		bind:value={index}
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
