<script lang="ts">
	import type { TManipulation } from '$lib/manipulations';
	import { ManipulationsList } from '$lib/manipulations';

	export let manipulations: TManipulation[] = [];
</script>

<div class="panel">
	<ManipulationsList bind:manipulations />
</div>

<style>
	.panel {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
