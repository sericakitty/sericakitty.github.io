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

				<tbody v-for="(event, index) in gig.events" :key="index">
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
	export default {
		props: {
			gigs: {
				required: true,
				type: Array,
			},
		},

		computed: {
			reversedGigList() {
				const copyList = [...this.gigs].reverse();
				copyList.forEach((element) => element.events.reverse());
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