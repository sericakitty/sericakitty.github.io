<template>
	<section>
		<div v-once>&copy; 2020 - {{ year }} {{ title }}. All Rights Reserved.</div>
	</section>
</template>

<script>
	import { computed } from 'vue';

	export default {
		data() {
			return {
				year: computed(() => Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(new Date())),
				title: document.title,
			};
		},
	};
</script>

<style>
</style>