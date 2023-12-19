<script setup lang="ts">
import './index.css';
</script>

<template>
	<div class="layout">
		<GPNavigation class="navigation" />
		<NuxtPage />
	</div>
</template>

<style scoped>
.layout {
	display: flex;
}

.content {
	width: clamp(100%, 100%, 100%);
	overflow: hidden;
}
</style>
