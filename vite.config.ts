import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			srcDir: './src',
			mode: 'production',
			base: process.env.NODE_ENV === 'production' ? '/string-manipulator/' : '/',
			scope: process.env.NODE_ENV === 'production' ? '/string-manipulator/' : '/',
			includeAssets: ['lines.svg', 'trash-can.svg'],
			manifest: {
				short_name: 'String Manipulator',
				name: 'String Manipulator - Text transformation tool',
				description: 'A web app for manipulating and transforming strings',
				start_url: process.env.NODE_ENV === 'production' ? '/string-manipulator/' : '/',
				display: 'standalone',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,ico,txt,woff2}'],
				cleanupOutdatedCaches: true,
				clientsClaim: true
			},
			devOptions: {
				enabled: true,
				type: 'module',
				navigateFallback: '/'
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
