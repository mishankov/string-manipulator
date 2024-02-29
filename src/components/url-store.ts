// Original source: github.com/bluwy/svelte-url/blob/master/src/url.js

import { derived, writable } from "svelte/store";

export function createUrlStore() {
	const href = writable(window.location.href);

	const originalPushState = history.pushState;
	const originalReplaceState = history.replaceState;

	const updateHref = () => href.set(window.location.href);

	history.pushState = (state, unused, url) => {
		originalPushState(state, unused, url);
		updateHref();
	};

	history.replaceState = (state, unused, url) => {
		originalReplaceState(state, unused, url);
		updateHref();
	};

	window.addEventListener("popstate", updateHref);
	window.addEventListener("hashchange", updateHref);

	return {
		subscribe: derived(href, ($href) => new URL($href)).subscribe,
	};
}

export default createUrlStore();
