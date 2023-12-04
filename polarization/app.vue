<script setup lang="ts">
import './index.css';
</script>

<template>
	<div class="layout">
		<GPNavigation class="navigation" />
		<div>
			<main>
				<NuxtPage />
			</main>
		</div>
	</div>
</template>

<style scoped>
.layout {
	display: flex;
}

main {
	width: 100%;
	margin: 0 auto;
	padding: 16px 8px;
}
</style>
