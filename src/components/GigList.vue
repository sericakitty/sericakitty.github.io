<template>
	<section>
		<details :open="gig.isOpen" v-for="gig in reversedGigList" :key="gig.id">

			<summary>
				<span id="labelShow">Show Up {{ gig.year }} Gigs &#9660;</span>
				<span id="labelHide" class="defaultHide">Hide Out {{ gig.year }} Gigs &#9650;</span>
			</summary>

			<table>

				<thead>
					<tr>
						<th scope="col" style="width:45%">Event / Club:</th>
						<th scope="col" style="width:35%">Location:</th>
						<th scope="col" style="width:20%">Date:</th>
					</tr>
				</thead>

				<tbody v-for="event in gig.events" :key="event.id" :class="checkDate(event.isPast)">
					<tr>
						<td>{{ event.title }} <span v-if="event.b2b" v-html="event.b2b"></span></td>
						<td>{{ event.location }} </td>
						<td>{{ event.date }}</td>
					</tr>
				</tbody>

			</table>

		</details>
	</section>
</template>

<script>
	import { checkDateIsPast } from '@/helpers/index';

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
					element.events.reverse();
					element.events.forEach((eventDate) => {
						eventDate.isPast = checkDateIsPast(eventDate.date);
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
	/* In default we keep labelHide hidden */
	.defaultHide {
		display: none;
	}

	/* styling every details element */
	details {
		overflow: auto;
		max-height: auto;
		margin: 5px 0px 5px 0px;
	}

	/* We want to control summary element inside details. We want to keep cursor area over title, and we don't need any default list style mark */
	summary {
		display: inline-flex;
		cursor: pointer;
		list-style: none;
	}

	th,
	td {
		color: var(--main-text-color);
		font-weight: 600;
		text-align: left;
		border-bottom: 1px solid var(--main-text-color);
		border-top: none !important;
		font-size: 15px;
		padding: 10px 5px 10px 5px;
	}

	table {
		table-layout: auto;
		width: 90%;
		margin-bottom: 15px;
	}

	/* When we open details element, we want to show labelHide element */
	details[open] > summary > #labelHide {
		display: list-item;
		list-style-type: none;
	}

	/* When we open details element, we want to hide labelShow element */
	details[open] > summary > #labelShow {
		display: none;
	}

	/* Formatting Bootstrap class */

	.row {
		margin: 0px;
	}

	/* Table text styling for past dates */

	.past td {
		color: var(--past-gigs-color);
		font-weight: normal;
	}
</style>