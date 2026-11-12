import type { RasterImage } from 'omrjs';

/** Downloads an omrjs raster (e.g. the rectified page with the configured grid) as a PNG. */
export function downloadRaster({ data, width, height }: RasterImage, name = 'omr-grid') {
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	canvas
		.getContext('2d')
		?.putImageData(new ImageData(new Uint8ClampedArray(data), width, height), 0, 0);
	canvas.toBlob((blob) => {
		if (!blob) return;
		const a = document.createElement('a');
		a.href = URL.createObjectURL(blob);
		a.download = `${name}-${Date.now()}.png`;
		a.click();
		URL.revokeObjectURL(a.href);
	}, 'image/png');
}
