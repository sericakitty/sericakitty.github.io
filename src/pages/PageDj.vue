<template>
	<section>
		<h1>Gig Calendar</h1>
		<div class="gigs">
			<GigList :gigs="gigs" />
		</div>
	</section>
</template>

<script>
	import GigList from '@/components/GigList.vue';
	import sourceData from '@/assets/data.json';

	export default {
		components: {
			GigList,
		},
		computed: {
			gigs() {
				return { ...sourceData }.gigs;
			},
		},
	};
</script>

<style>
	.gigs {
		height: 100%;
		width: 100%;
		display: table;
		list-style: none;
		margin-bottom: 25px;
	}
</style>