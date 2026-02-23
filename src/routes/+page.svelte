<script lang="ts">
	import { type TManipulation, applyManipulations } from '$lib/manipulations';
	import ManipulationsPanel from './ManipulationsPanel.svelte';

	import TextArea from '$lib/components/TextArea.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Link from '$lib/components/Link.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let source = 'Try me!\nResult will be updated automatically';
	let result = '';
	let manipulations: TManipulation[] = [
		{
			type: 'replace',
			from: '\\n',
			to: ' -- ',
			id: 'initial'
		}
	];

	let copySuccess = false;
	let pasteError = '';
	let isMounted = false;

	// Convert manipulations to JSON string
	function manipulationsToJSON(): string {
		return JSON.stringify(manipulations, null, 2);
	}

	// Convert JSON string to manipulations
	function jsonToManipulations(jsonStr: string): TManipulation[] | null {
		try {
			const parsed = JSON.parse(jsonStr);
			return parsed as TManipulation[];
		} catch (e) {
			return null;
		}
	}

	// Encode to Base64 for URL
	function toBase64(str: string): string {
		return btoa(unescape(encodeURIComponent(str)));
	}

	// Decode from Base64
	function fromBase64(str: string): string {
		return decodeURIComponent(escape(atob(str)));
	}

	// Copy manipulations to clipboard
	async function copyManipulations() {
		try {
			await navigator.clipboard.writeText(manipulationsToJSON());
			copySuccess = true;
			pasteError = '';
			setTimeout(() => (copySuccess = false), 2000);
		} catch (err) {
			pasteError = 'Failed to copy to clipboard';
		}
	}

	// Paste manipulations from clipboard
	async function pasteManipulations() {
		try {
			const text = await navigator.clipboard.readText();
			const parsed = jsonToManipulations(text);
			if (parsed) {
				manipulations = parsed;
				pasteError = '';
			} else {
				pasteError = 'Invalid JSON format';
			}
		} catch (err) {
			pasteError = 'Failed to read from clipboard';
		}
	}

	// Update URL with current manipulations
	function updateURL() {
		if (!isMounted) return;
		const jsonStr = manipulationsToJSON();
		const encoded = toBase64(jsonStr);
		const url = new URL(window.location.href);
		url.searchParams.set('manipulations', encoded);
		window.history.replaceState({}, '', url.toString());
	}

	// Load manipulations from URL
	function loadFromURL() {
		const urlParams = new URLSearchParams(window.location.search);
		const encoded = urlParams.get('manipulations');
		if (encoded) {
			try {
				const jsonStr = fromBase64(encoded);
				const parsed = jsonToManipulations(jsonStr);
				if (parsed) {
					manipulations = parsed;
				}
			} catch (e) {
				console.error('Failed to load manipulations from URL:', e);
			}
		}
	}

	onMount(() => {
		// Load manipulations from URL on mount
		loadFromURL();

		// Mark as mounted after loading from URL
		isMounted = true;

		document.addEventListener('keydown', (event) => {
			if (event.ctrlKey && event.key === 'Enter') {
				result = applyManipulations(source, manipulations);
			}
		});
	});

	// Update URL when manipulations change (after initial mount)
	$: if (isMounted) updateURL();

	$: result = applyManipulations(source, manipulations);
</script>

<div class="panels">
	<div class="panel">
		<Heading text="Source" />
		<TextArea id="source" bind:value={source} />
	</div>

	<div class="panel">
		<div class="header-with-link">
			<Heading text="Manipulations" />
			<Link link="/docs">Docs</Link>
		</div>
		<ManipulationsPanel bind:manipulations />

		<div class="actions">
			<button class="action-btn" on:click={copyManipulations} disabled={copySuccess}>
				{copySuccess ? '✓ Copied!' : '📋 Copy JSON'}
			</button>
			<button class="action-btn" on:click={pasteManipulations}>📝 Paste JSON</button>
		</div>
		{#if pasteError}
			<div class="error">{pasteError}</div>
		{/if}
	</div>

	<div class="panel">
		<Heading text="Result" />
		<TextArea id="result" bind:value={result} />
	</div>
</div>

<style>
	.panels {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 10px;

		padding: 10px;
	}

	.panel {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.header-with-link {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: end;
	}

	.actions {
		display: flex;
		gap: 8px;
		margin-top: 4px;
	}

	.action-btn {
		flex: 1;
		padding: 8px 12px;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 4px;
		cursor: pointer;
		font-size: 13px;
		transition: background-color 0.2s;
	}

	.action-btn:hover:not(:disabled) {
		background-color: #e0e0e0;
	}

	.action-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.error {
		color: #d32f2f;
		font-size: 12px;
		margin-top: -6px;
	}
</style>
