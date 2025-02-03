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
            <th scope="col" style="width: 50%">Event / Club:</th>
            <th scope="col" style="width: 30%">Location:</th>
            <th scope="col" style="width: 15%">Date:</th>
          </tr>
        </thead>

        <tbody v-for="gig in gigs.giglist" :key="gig.id" :class="checkDate(gig.isPast)">
          <tr>
            <td class="title_td">{{ gig.title }} <span v-if="gig.b2b" v-html="gig.b2b"></span></td>
            <td class="location_td">{{ gig.location }}</td>
            <td class="date_td">
              <!-- <span v-if="gig.day[0]===' '">&nbsp;</span> -->
              <span class="day_span">{{ gig.day }}</span>
              <span class="month_span">{{ gig.month }}</span>
              <span class="year_span">{{ gig.year }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </details>
  </section>

</template>

<script>
import { checkDateIsPast, formatDate } from "Helpers";

export default {
  props: {
    gigs: {
      required: true,
      type: Array,
    },
  },
  computed: {
    reversedGigList() {
      const copyList = [...this.gigs].reverse() // Take copy from original list and reversed it
      copyList.forEach((element) => {
        element.giglist.reverse()
        element.giglist.forEach((gig) => {
          gig.isPast = checkDateIsPast(gig.date)
          const date = formatDate(gig.date)
          gig.day = date[0]
          gig.month = date[1]
          gig.year = date[2]
        })
      }) // Iterate all events in copylist and reverse them
      return copyList
    },
  },
  methods: {
    checkDate(isPast) {
      return isPast ? "past" : ""
    },
  },
}
</script>

<style>
.date_td .day_span {
  display: inline-block;
  width: 1.1rem;
  text-align: right;
  margin-right: 0.3rem;
}

.date_td .month_span {
  display: inline-block;
  width: 2rem;
  text-align: left;
}

.date_td .year_span {
  display: inline-block;
  width: 2.5rem;
  text-align: left;
}

.past td {
  color: #bcbcbc;
}
</style>
