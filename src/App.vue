<template>
	<section>
		<the-navbar />
		<main class="footerfixer">
			<div class="container">
				<router-view />
			</div>
		</main>
		<the-footer />
	</section>
</template>

<script>
	import TheNavbar from '@/components/TheNavbar.vue';
	import TheFooter from '@/components/TheFooter.vue';

	export default {
		name: 'App',
		components: {
			TheNavbar,
			TheFooter,
		},
	};
</script>

<style>
	@import "@/assets/styles.css";

	/* For fixing footer to bottom. Apply to main container, so main is min 70% viewport height and footer is pushed to bottom */
	.footerfixer {
		min-height: 70vh;
	}
</style>
