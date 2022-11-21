<template>
	<section>

		<details :open="gigs.isOpen" v-for="gigs in reversedGigList" :key="gigs.id">

			<summary>
				<span id="labelShow">Show Up {{ gigs.year }} Gigs &#9660;</span>
				<span id="labelHide" class="defaultHide">Hide Out {{ gigs.year }} Gigs &#9650;</span>
			</summary>

			<table>

				<thead>
					<tr>
						<th scope="col" style="width:45%">Event / Club:</th>
						<th scope="col" style="width:35%">Location:</th>
						<th scope="col" style="width:20%">Date: (dd.mm.yyyy)</th>
					</tr>
				</thead>

				<tbody v-for="gig in gigs.giglist" :key="gig.id" :class="checkDate(gig.isPast)">
					<tr>
						<td>{{ gig.title }} <span v-if="gig.b2b" v-html="gig.b2b"></span></td>
						<td>{{ gig.location }} </td>
						<td>{{ gig.date }}</td>
					</tr>
				</tbody>

			</table>

		</details>
	</section>
</template>

<script>
	import { checkDateIsPast, formatDate } from '@/helpers/index';

	export default {
		props: {
			gigs: {
				required: true,
				type: Array,
			},
		},
		computed: {
			reversedGigList() {
				const copyList = [...this.gigs].reverse(); // Take copy from original list and reversed it
				copyList.forEach((element) => {
					element.giglist.reverse();
					element.giglist.forEach((eventList) => {
						eventList.isPast = checkDateIsPast(eventList.date);
						eventList.date = formatDate(eventList.date);
					});
				}); // Iterate all events in copylist and reverse them
				return copyList;
			},
		},
		methods: {
			checkDate(isPast) {
				return isPast ? 'past' : '';
			},
		},

	};
</script>

<style>

</style>