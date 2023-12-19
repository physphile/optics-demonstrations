import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface Params {
	camera: {
		position: [number, number, number];
		lookAt: [number, number, number];
	};
}

const defaultParams: Params = {
	camera: {
		position: [1, 1, 1],
		lookAt: [0, 0, 0],
	},
};

export const setupScene = (container: HTMLDivElement, params = defaultParams) => {
	const { width, height } = container.getBoundingClientRect();
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0xe9e2e1);
	container.appendChild(renderer.domElement);

	const controls = new OrbitControls(camera, renderer.domElement);

	camera.position.set(...params.camera.position);
	controls.target = new THREE.Vector3(...params.camera.lookAt);
	controls.update();
	controls.saveState();

	return { scene, renderer, camera, controls };
};
