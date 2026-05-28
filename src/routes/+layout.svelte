<script lang="ts">
	import '../app.css';
	import 'katex/dist/katex.min.css';
	import { onMount } from 'svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { themeStore } from '$lib/stores/theme';
	import { isTauriMobileApp } from '$lib/utils/platform';
	import PageTransition from '$lib/components/Transition.svelte';
	import type { Snippet } from 'svelte';

	let { children, data }: { children: Snippet; data: { url: string } } = $props();
	let isDark = $state(false);
	let isTauriMobile = $state(false);

	themeStore.subscribe((value) => {
		isDark = value;
	});

	onMount(() => {
		isTauriMobile = isTauriMobileApp();
	});
</script>

{#if !isTauriMobile}
	<Topbar {isDark} toggleTheme={() => themeStore.toggle()} />
{/if}

<main class:has-bottom-nav={isTauriMobile}>
	<PageTransition url={data.url}>
		{@render children?.()}
	</PageTransition>
</main>

{#if isTauriMobile}
	<BottomNav />
{/if}

<style>
	main.has-bottom-nav {
		padding-bottom: calc(72px + var(--safe-area-inset-bottom));
	}
</style>
