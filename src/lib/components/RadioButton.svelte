<script lang="ts">
	interface Option {
		value: string;
		label: string;
	}

	export let options: Option[];
	export let selected: string;
</script>

<div>
	{#each options as option}
		<label>
			<input type="radio" bind:group={selected} value={option.value} />
			{option.label}
		</label>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	label {
		display: flex;
		gap: 5px;
		align-items: center;
	}

	input {
		margin: 0;
	}
</style>
