<template>
	<section>
		<table>
			<thead>
				<tr>
					<th scope="col" style="width:45%">Event / Club:</th>
					<th scope="col" style="width:35%">Location:</th>
					<th scope="col" style="width:20%">Date: (dd.mm.yyyy)</th>
				</tr>
			</thead>

			<tbody v-for="event in reversedEventsList" :key="event.id">
				<tr>
					<td>{{ event.title }} <span v-if="event.b2b" v-html="event.b2b"></span></td>
					<td>{{ event.location }} </td>
					<td>{{ event.date }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
	import { formatDate } from '@/helpers/index';

	export default {
		props: {
			events: {
				required: true,
				type: Array,
			},
		},
		computed: {
			reversedEventsList() {
				const copyList = [...this.events].reverse(); // Take copy from original list and reversed it
				copyList.forEach((element) => {
					element.date = formatDate(element.date);
				});
				return copyList;
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