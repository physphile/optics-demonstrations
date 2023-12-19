<script setup lang="ts">
import * as THREE from 'three';
import { debounce } from '~/utils/utils';
import { setupScene } from '../setupScene';

const profile = ref<HTMLDivElement | null>(null);
let animationId: number | null = null;

const props = withDefaults(defineProps<Props>(), {
	e0: 100,
	lambda: 100,
	omega: 1,
});

const addAxes = (scene: THREE.Scene) => {
	const circleGeometry = new THREE.CircleGeometry(props.e0, 32);
	const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
	// const axisGeomtery = new THREE.BufferGeometry().setFromPoints([
	//     new THREE
	// ])
};

onMounted(() => {
	if (!profile.value) return;

	const { camera, renderer, scene } = setupScene(profile.value);

	const animate = (ms: number) => {
		const t = ms / 1000;
		renderer.render(scene, camera);
		animationId = requestAnimationFrame(animate);
	};
	animationId = requestAnimationFrame(animate);

	const resizeHandler = debounce(() => {
		if (profile.value) {
			const { width, height } = profile.value.getBoundingClientRect();
			renderer.setSize(width, height);
		}
	});

	window.addEventListener('resize', resizeHandler);

	return () => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		window.removeEventListener('resize', resizeHandler);
	};
});
</script>
<template>
	<div ref="profile"></div>
</template>
<style scoped></style>
