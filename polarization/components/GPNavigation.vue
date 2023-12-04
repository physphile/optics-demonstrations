<script setup lang="ts">
import type { NavigationItem } from './types';

const items: NavigationItem[] = [
	{ id: 1, name: 'Кристалл', link: '/descriptions/crystal' },
	{ id: 2, name: 'Бегущая волна', link: '/descriptions/running_wave' },
	{ id: 3, name: 'Стоячая волна', link: '/descriptions/standing_wave' },
	{ id: 4, name: 'Две волны', link: '/descriptions/two_waves' },
	{ id: 5, name: 'Описание', link: '/descriptions' },
];
</script>
<template>
	<aside>
		<GPNavigationItem v-for="item of items" :key="item.id" :item="item" />
	</aside>
</template>
<style scoped>
aside {
	display: flex;
	flex-direction: column;
	padding: 16px;
}

aside > a {
	margin-bottom: 8px;
}
</style>
