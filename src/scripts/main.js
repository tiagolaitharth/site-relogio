const introVideo = document.getElementById('introVideo');

introVideo.addEventListener('timeupdate', () => {
	const duration = introVideo.duration;
	const currentTime = introVideo.currentTime;

	if (duration > 0) {
		const timeLeft = duration - currentTime;

		if (timeLeft > 0 && timeLeft < 2.5) {
			const rate = 0.15 + (timeLeft / 2.5) * 0.85;
			introVideo.playbackRate = Math.max(0.15, Math.min(1.0, rate));
		} else {
			introVideo.playbackRate = 1.0;
		}
	}
});

introVideo.addEventListener('ended', () => {
	introVideo.pause();
	introVideo.playbackRate = 0.15;
});

let introHasLeftViewport = false;

const introVisibilityObserver = new IntersectionObserver(
	([entry]) => {
		if (!entry.isIntersecting) {
			introHasLeftViewport = true;
			return;
		}

		if (!introHasLeftViewport) return;

		introHasLeftViewport = false;
		introVideo.currentTime = 0;
		introVideo.playbackRate = 1;

		const replay = introVideo.play();
		if (replay) replay.catch(() => {});
	},
	{ threshold: 0.15 },
);

introVisibilityObserver.observe(document.getElementById('intro'));

const parallaxSection = document.getElementById('artesanal');
const pLayers = [
	document.getElementById('p-layer1'),
	document.getElementById('p-layer2'),
	document.getElementById('p-layer3'),
	document.getElementById('p-layer4'),
	document.getElementById('p-layer5'),
	document.getElementById('p-layer6'),
];
const pText = document.getElementById('p-text');
const maxOffsets = [880, 660, 440, 250, 100, 15];
let parallaxFrameRequested = false;

const updateParallax = () => {
	if (!parallaxSection || !pText || pLayers.some((layer) => !layer)) return;

	const rect = parallaxSection.getBoundingClientRect();
	const sectionHeight = parallaxSection.offsetHeight;
	const viewHeight = window.innerHeight;
	const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewHeight)));
	const factor = 1 - progress;

	pLayers.forEach((layer, index) => {
		const yTranslate = maxOffsets[index] * factor;
		const scale = 1 + (0.09 * factor * (6 - index)) / 5;
		layer.style.transform = `translate3d(0, ${yTranslate}px, 0) scale(${scale})`;
	});

	const textOffset = 240 * factor;
	let opacity = 0;
	let blur = 12;

	if (progress > 0.08) {
		const t = Math.min(1, (progress - 0.08) / 0.2);
		opacity = t;
		blur = 12 * (1 - t);
	}

	pText.style.opacity = `${opacity}`;
	pText.style.transform = `translate(-50%, calc(-50% + ${textOffset}px))`;
	pText.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
};

const requestParallaxUpdate = () => {
	if (parallaxFrameRequested) return;
	parallaxFrameRequested = true;

	requestAnimationFrame(() => {
		updateParallax();
		parallaxFrameRequested = false;
	});
};

window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
window.addEventListener('resize', requestParallaxUpdate);
requestParallaxUpdate();
