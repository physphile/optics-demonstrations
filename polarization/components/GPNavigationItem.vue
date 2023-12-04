<script setup lang="ts">
import type { NavigationItem } from './types';

defineProps<{ item: NavigationItem }>();
</script>
<template>
	<div class="item">
		<NuxtLink :to="item.link" class="link">
			{{ item.name }}
		</NuxtLink>
	</div>
</template>
<style scoped>
.link {
	white-space: nowrap;
	text-decoration: none;
	color: inherit;
}

.link::after {
	content: '';
	position: absolute;
	inset: 0;
}

.item {
	position: relative;
	padding: 12px 16px;
	background: var(--color-primary-10);
	border-radius: 8px;
}

.item:not(:last-child) {
	margin-bottom: 8px;
}
</style>
