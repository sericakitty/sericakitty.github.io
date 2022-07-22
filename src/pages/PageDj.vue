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

	const dbURL = './db.json';

	export default {
		data() {
			return {
				gigs: [],
			};
		},
		components: {
			GigList,
		},
		async created() { // created hook, making ajax call. async so we are waiting response
			try {
				const response = await axios.get(dbURL); // using axios.get method() to make html request to get data from data.json
				this.gigs = response.data.gigs;
			} catch (err) {
				console.log(err.message);
			}
		}
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