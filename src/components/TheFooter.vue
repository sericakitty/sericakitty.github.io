<template>
	<section>
		<footer class=footer>
			<the-copyright />
		</footer>
	</section>
</template>

<script>

	import TheCopyright from '@/components/TheCopyright.vue';

	export default {
		components: {
			TheCopyright,
		},
	};
</script>

<style>
	.footer {
		margin-top: 100px;
		margin-bottom: 20px;
		text-align: center;
		clear: both;
		position: relative;
	}
</style>