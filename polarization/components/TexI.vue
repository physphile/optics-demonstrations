<script setup lang="ts">
import katex from 'katex';
const marks = [')', ',', '.', ':', ';', '!', '?', '-'];

const props = withDefaults(
	defineProps<{
		text?: string;
		display?: boolean;
	}>(),
	{ display: false, text: undefined }
);

const span = ref<HTMLSpanElement | null>(null);

onMounted(() => {
	if (span.value) {
		let content = props.text ?? span.value.textContent ?? 'error';
		let mark = '';
		const last = content[content.length - 1];

		// Фикс для знаков препинания после формулы, чтобы они были с ней неразрывны и были
		// отрендерены родительским шрифтом
		if (marks.includes(last)) {
			content = content.slice(0, -1);
			mark = last;
		}

		const katexString = katex.renderToString(content, {
			displayMode: props.display,
			output: 'html',
		});

		span.value.innerHTML = katexString + mark;
	}
});
</script>
<template>
	<span ref="span" class="nowrap">
		<slot />
	</span>
</template>
<style scoped>
.nowrap {
	white-space: nowrap;
}
</style>
