<script lang="ts">
	import '../app.css';
	import 'katex/dist/katex.min.css';
	import Topbar from '$lib/components/Topbar.svelte';
	import { themeStore } from '$lib/stores/theme';
	import PageTransition from '$lib/components/Transition.svelte';
	import type { Snippet } from 'svelte';

	let { children, data }: { children: Snippet; data: { url: string } } = $props();
	let isDark = $state(false);

	themeStore.subscribe((value) => {
		isDark = value;
	});
</script>

<Topbar {isDark} toggleTheme={() => themeStore.toggle()} />

<main>
	<PageTransition url={data.url}>
		{@render children?.()}
	</PageTransition>
</main>
