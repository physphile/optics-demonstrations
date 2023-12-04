<script setup lang="ts"></script>
<template>
	<h1>Две волны</h1>

	<ul>
		На схеме представлены:
		<li>
			Слева вверху &mdash; две
			<NuxtLink to="/descriptions#linepolar">линейно поляризованные </NuxtLink>
			<NuxtLink to="/descriptions#lineelwave"
				>плоские монохроматические электромагнитные волны</NuxtLink
			>
			распространяющиеся в вакууме в одном направлении вдоль оси <TexI>Oy</TexI>, при этом для
			одной из волн
			<NuxtLink to="/descriptions#ploskostpolarizacii">плоскость поляризации </NuxtLink>
			<TexI>zOy</TexI>, а для другой
			<NuxtLink to="/descriptions#ploskostpolarizacii">плоскость поляризации</NuxtLink>
			повернута на некоторый (регулируемый) угол. Кроме этого, существеут возможность
			регулировать разность фаз между волнами и относительную амплитуду второй волны (показаны
			только <TexI>\vec E</TexI>-компоненты поля.
		</li>
		<li>
			Справа вверху &mdash; закон изменения <TexI>\vec E_1,</TexI> <TexI>\vec E_2</TexI> и
			<TexI>\vec E = \vec E_1 + \vec E_2</TexI> от времени в выделенной точке пространства
			(ось <TexI>Oy</TexI> направлена на наблюдателя).
		</li>
		<li>
			Внизу &mdash; закон изменения модуля
			<NuxtLink to="/descriptions#umovpointing">вектора Умова Пойнтинга</NuxtLink>&thinsp;
			<TexI>\vec S = [\vec E \times \vec H]</TexI> и его среднее значение
			<TexI text="<\!S\!>"></TexI> в результирующей волне.
		</li>
	</ul>
</template>
<style scoped></style>
