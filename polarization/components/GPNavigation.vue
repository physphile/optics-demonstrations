<script setup lang="ts">
import type { NavigationItem } from './types';

const items: NavigationItem[] = [
	{ id: 1, name: 'Кристалл', link: '/crystal' },
	{ id: 2, name: 'Бегущая волна', link: '/running_wave' },
	{ id: 3, name: 'Стоячая волна', link: '/standing_wave' },
	{ id: 4, name: 'Две волны', link: '/two_waves' },
	{ id: 5, name: 'Описание', link: '/description' },
];
</script>
<template>
	<nav>
		<GPNavigationItem v-for="item of items" :key="item.id" :item="item" />
	</nav>
</template>
<style scoped>
nav {
	display: flex;
	flex-direction: column;
	padding: 16px;
}

nav > a {
	margin-bottom: 8px;
}
</style>
