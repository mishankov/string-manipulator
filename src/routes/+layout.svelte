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
					// Show user-facing notification that offline mode won't be available
					if (typeof window !== 'undefined') {
						console.warn('Offline functionality will not be available. This may be due to private browsing mode or browser restrictions.');
					}
				}
			});
		}
	});
</script>

<slot />
