<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	interface Props {
		examId: string;
		size?: number;
	}

	let { examId, size = 200 }: Props = $props();

	let canvas: HTMLCanvasElement;

	onMount(() => {
		if (canvas) {
			QRCode.toCanvas(canvas, examId, {
				width: size,
				margin: 1,
				color: {
					dark: '#000000',
					light: '#ffffff'
				}
			});
		}
	});
</script>

<div class="qr-container">
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.qr-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-md);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
	}

	canvas {
		border: 2px solid var(--border-color);
		border-radius: var(--radius-sm);
	}
</style>
