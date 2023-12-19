<script setup lang="ts"></script>
<template>
	<div class="layout">
		<main>
			<slot />
		</main>
		<aside class="controls">
			<slot name="controls" />
		</aside>
	</div>
</template>
<style scoped>
.layout {
	display: flex;
	width: 100%;
	overflow: hidden;
}

.controls {
	width: 400px;
	padding: 16px;
	font-family: Katex Math;
}

main {
	flex: 1;
	padding: 16px 8px;
	max-width: 1200px;
}
</style>
