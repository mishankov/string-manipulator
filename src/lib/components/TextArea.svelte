<script lang="ts">
	let {
		value = $bindable(''),
		id = 'ta',
		labelText = '',
		spellcheck = false
	}: {
		value?: string;
		id?: string;
		labelText?: string;
		spellcheck?: boolean;
	} = $props();
</script>

{#if labelText !== ''}
	<label for={id}>{labelText}</label>
{/if}

<textarea {id} bind:value {spellcheck}></textarea>

<style>
	textarea {
		width: 100%;
		color: var(--text-color);
		border-radius: 10px;
		border: 2px solid var(--border-color-100);
		padding: 10px;

		font-family: monospace;
	}

	textarea:focus {
		outline: none;
		/* background-color: var(--bg-color-120); */
	}
</style>
