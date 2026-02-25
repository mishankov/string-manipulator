<script lang="ts">
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(registration) {
					console.log('Service Worker registered:', registration);
				},
				onRegisterError(error) {
					console.error('Service Worker registration error:', error);
				}
			});
		}
	});
</script>

<slot />
