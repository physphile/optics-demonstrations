import WebGL from 'three/addons/capabilities/WebGL.js';

export const checkWebGLCompatibility = () => {
	if (WebGL.isWebGLAvailable()) {
		return;
	}

	const warning = WebGL.getWebGLErrorMessage();
	alert(warning);
};

export const debounce = (fn: (...args: any[]) => any, timeout = 300) => {
	let id: number | null = null;
	return () => {
		if (id) clearTimeout(id);
		id = setTimeout(fn, timeout);
	};
};
