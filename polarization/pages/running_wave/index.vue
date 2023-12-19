<script setup lang="ts">
const params = reactive({
	omega: 1,
	lambda: 100,
	e0: 100,
});
</script>
<template>
	<PageLayout>
		<div class="canvas-container">
			<div ref="up"></div>
			<div ref="profile"></div>
			<RunningWaveCanvasEH
				class="eh"
				:omega="params.omega"
				:lambda="params.lambda"
				:e0="params.e0"
			/>
		</div>
		<DescriptionRunningWave />

		<template #controls>
			<div>
				<TexI>E = E_0 \sin (\omega t - kx)</TexI>
			</div>
			<div class="field">
				<div class="row">
					<TexI>\omega =</TexI>&thinsp; <span>{{ params.omega }}</span
					>&thinsp; <TexI>rad / s</TexI>
				</div>
				<div class="row">
					<input
						type="range"
						min="0"
						max="20"
						list="omega"
						:value="params.omega"
						@change="e => (params.omega = e.target.value)"
					/>
					<datalist id="omega">
						<option v-for="n in 21" :key="n" :value="n - 1">{{ n - 1 }}</option>
					</datalist>
				</div>
			</div>
			<div class="field">
				<div class="row">
					<TexI>\lambda =</TexI>&thinsp; <span>{{ params.lambda }}</span
					>&thinsp; <TexI>nm</TexI>
				</div>
				<div class="row">
					<input
						type="range"
						min="100"
						max="1000"
						list="lambda"
						:value="params.lambda"
						@change="e => (params.lambda = e.target.value)"
					/>
					<datalist id="lambda">
						<option v-for="n in 20" :key="n" :value="n * 100">
							{{ n * 100 }}
						</option>
					</datalist>
				</div>
			</div>
		</template>
	</PageLayout>
</template>
<style scoped>
.canvas-container {
	width: 100%;
	height: auto;
	aspect-ratio: 1 / 1;
	overflow: hidden;
	margin-bottom: 32px;

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 8px;
}

.canvas-container > div {
	border-radius: 8px;
	overflow: hidden;
}

.eh {
	grid-column: 1 / 3;
}
</style>
