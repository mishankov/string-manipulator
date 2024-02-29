// Original source: github.com/bluwy/svelte-url/blob/master/src/url.js

import { derived, writable } from "svelte/store";

export function createUrlStore() {
	const href = writable(window.location.href);

	const originalPushState = history.pushState;
	const originalReplaceState = history.replaceState;

	const updateHref = () => href.set(window.location.href);

	history.pushState = function (data, unused, url) {
    originalPushState.apply(this, [data, unused, url]);
    updateHref()
  }

	history.replaceState = function (data, unused, url)  {
		originalReplaceState.apply(this, [data, unused, url]);
		updateHref();
	};

	window.addEventListener("popstate", updateHref);
	window.addEventListener("hashchange", updateHref);

	return {
		subscribe: derived(href, ($href) => new URL($href)).subscribe,
	};
}

export default createUrlStore();
