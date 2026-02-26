<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<h1>{text}</h1>

<style>
	h1 {
		color: var(--text-color);
		font-family: monospace;
	}
</style>
