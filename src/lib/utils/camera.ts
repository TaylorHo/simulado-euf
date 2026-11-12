/** Starts the rear camera on a <video> element. Caller must stop the returned stream. */
export async function startCamera(
	video: HTMLVideoElement,
	resolution?: { width: number; height: number }
): Promise<MediaStream> {
	// Without constraints browsers default to ~640x480, too small for OMR marker detection.
	const stream = await navigator.mediaDevices.getUserMedia({
		video: {
			facingMode: 'environment',
			width: { ideal: resolution?.width },
			height: { ideal: resolution?.height }
		}
	});
	video.srcObject = stream;
	await video.play();
	return stream;
}

export function stopStream(stream: MediaStream | null) {
	stream?.getTracks().forEach((track) => track.stop());
}
