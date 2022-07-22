<template>
	<section>
		<h1>Gigs Calendar</h1>
		<div class="gigs">
			<GigList :gigs="gigs" />
		</div>
	</section>
</template>

<script>
	import GigList from '@/components/GigList.vue';
	import axios from 'axios';

	export default {
		data() {
			return {
				gigs: [],
			};
		},
		components: {
			GigList,
		},
		async created() {
			try {
				const res = await axios.get('http://localhost:3000/gigs');
				this.gigs = res.data;
			} catch (e) {
				console.log(e.message);
			}
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