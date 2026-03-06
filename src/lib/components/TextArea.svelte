<script lang="ts">
	let {
		value = $bindable(''),
		id,
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

<textarea id={id} bind:value {spellcheck}></textarea>

<style>
	textarea {
		width: 100%;
		min-height: 120px;
		color: var(--text-color);
		border-radius: 10px;
		border: 2px solid var(--border-color-100);
		padding: 10px;
		font-family: monospace;
		resize: vertical;
		box-sizing: border-box;
	}

	textarea:focus {
		outline: none;
		/* background-color: var(--bg-color-120); */
	}

	@media (max-width: 768px) {
		textarea {
			min-height: 100px;
			padding: 8px;
		}
	}
</style>
