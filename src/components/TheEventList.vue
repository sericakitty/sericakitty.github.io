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

</style>