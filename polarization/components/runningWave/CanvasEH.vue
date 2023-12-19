<script setup lang="ts">
import * as THREE from 'three';
import { debounce } from '../../utils/utils';
import type { Props } from './props';
import { setupScene } from '../setupScene';

const props = withDefaults(defineProps<Props>(), {
	e0: 100,
	lambda: 100,
	omega: 1,
});
const eh = ref<HTMLDivElement | null>(null);
let animationId: number | null = null;

const accuracy = 2;
const crossPosition = 200;
const maxX = 2000;

const k = computed(() => (2 * Math.PI) / props.lambda);
const waveFunction = (x: number, t: number) => props.e0 * Math.sin(props.omega * t - k.value * x);

const ELine = new THREE.Line(
	new THREE.BufferGeometry().setFromPoints([]),
	new THREE.LineBasicMaterial({ color: 0x388e3c })
);

const HLine = new THREE.Line(
	new THREE.BufferGeometry().setFromPoints([]),
	new THREE.LineBasicMaterial({ color: 0xfbc02d })
);

const sphereY = new THREE.Mesh(
	new THREE.SphereGeometry(5, 8, 8),
	new THREE.MeshBasicMaterial({ color: 0x000000 })
);
sphereY.translateX(crossPosition);
const sphereZ = sphereY.clone();

const addAxes = (scene: THREE.Scene) => {
	const axisMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
	const OxGeometry = new THREE.BufferGeometry().setFromPoints([
		new THREE.Vector3(0, 0, 0),
		new THREE.Vector3(maxX, 0, 0),
	]);
	const Ox = new THREE.Line(OxGeometry, axisMaterial);
	const Oy = Ox.clone();
	const Oz = Ox.clone();
	Oy.rotateZ(Math.PI / 2);
	Oz.rotateY(-Math.PI / 2);
	scene.add(Ox, Oy, Oz);
};

const addCross = (scene: THREE.Scene) => {
	const crossMaterial = new THREE.LineBasicMaterial({ color: 0xe64a19 });
	const crossGeometry = new THREE.BufferGeometry().setFromPoints([
		new THREE.Vector3(0, -props.e0, 0),
		new THREE.Vector3(0, props.e0, 0),
	]);
	const crossY = new THREE.Line(crossGeometry, crossMaterial);
	crossY.translateX(crossPosition);
	const crossZ = crossY.clone();
	crossZ.rotateX(Math.PI / 2);
	scene.add(crossY, crossZ);
};

const updateGraph = (t: number) => {
	const EPoints: THREE.Vector3[] = [];
	const HPoints: THREE.Vector3[] = [];
	for (let x = 0; x < maxX; x += accuracy) {
		const y = waveFunction(x, t);
		EPoints.push(new THREE.Vector3(x, y, 0));
		HPoints.push(new THREE.Vector3(x, 0, y));
	}
	ELine.geometry.setFromPoints(EPoints);
	HLine.geometry.setFromPoints(HPoints);
};

const updateSpheres = (t: number) => {
	const y = waveFunction(crossPosition, t);
	sphereY.position.setY(y);
	sphereZ.position.setZ(y);
};

onMounted(() => {
	if (!eh.value) return;

	const { scene, renderer, camera } = setupScene(eh.value, {
		camera: {
			position: [crossPosition + 50, props.e0 / 2, 2.5 * props.e0],
			lookAt: [crossPosition + 50, props.e0 / 2, 0],
		},
	});
	addAxes(scene);
	addCross(scene);
	scene.add(ELine, HLine, sphereY, sphereZ);

	const animate = (ms: number) => {
		const t = ms / 1000;
		updateGraph(t);
		updateSpheres(t);
		renderer.render(scene, camera);
		animationId = requestAnimationFrame(animate);
	};
	animationId = requestAnimationFrame(animate);

	const resizeHandler = debounce(() => {
		if (eh.value) {
			const { width, height } = eh.value.getBoundingClientRect();
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
	<div ref="eh" class="eh">
		<button class="reset">reset</button>
	</div>
</template>
<style scoped>
.reset {
	position: absolute;
}
</style>
