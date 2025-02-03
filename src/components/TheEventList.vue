<template>
  <section>
    <table>
      <thead>
        <tr>
          <th scope="col" style="width:45%">Event / Club:</th>
          <th scope="col" style="width:35%">Location:</th>
          <th scope="col" style="width:20%">Date:</th>
        </tr>
      </thead>

      <tbody v-for="event in reversedEventsList" :key="event.id">
        <tr>
          <td>{{ event.title }} <span v-if="event.b2b" v-html="event.b2b"></span></td>
          <td>{{ event.location }} </td>
          <!-- <td>{{ event.date }}</td> -->
          <td class="date_td">
            <!-- <span v-if="event.day[0]===' '">&nbsp;</span> -->
            <span class="day_span">{{ event.day }}</span>
            <span class="month_span">{{ event.month }}</span>
            <span class="year_span">{{ event.year }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { formatDate } from 'Helpers';

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
      copyList.forEach((event) => {
        const date = formatDate(event.date);
        event.day = date[0];
        event.month = date[1];
        event.year = date[2];
      });
      return copyList;
    },
  },
};
</script>

<style></style>