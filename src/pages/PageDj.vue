<template>
  <section>
    <div class='text-center'>
      <a href='#events'>GO TO THE GIG LIST</a>
    </div>
    <TheDjPageText />
    <h2 id='events'>Events that I've hosted with my friends and with my sister <a href='https://www.mixcloud.com/angelicaroselie/' target='_blank'>Angelica Roselie</a>.</h2>

    <div v-if='gigs.length !== 0 && events.length !== 0'>

      <div class='events'>
        <TheEventList :events='events' />
      </div>

      <h2>Gigs Calendar</h2>
      <div class='gigs'>
        <TheGigList :gigs='gigs' />
      </div>
    </div>
    <div v-else>
      <p class='text-center'>Loading gigs and events...</p>
    </div>
  </section>
</template>

<script>
import TheEventList from '@/components/TheEventList.vue';
import TheGigList from '@/components/TheGigList.vue';
import TheDjPageText from '@/components/TheDjPageText.vue';
import axios from 'axios';

const BASEURI = './db.json';

export default {
  data() {
    return {
      gigs: [],
      events: [],
    };
  },
  components: {
    TheGigList,
    TheEventList,
    TheDjPageText,
  },
  async created() { // created hook, making ajax call. async so we are waiting response
    try {
      const response = await axios.get(BASEURI);
      if (response.status === 200) {
        this.gigs = response.data.gigs;
        this.events = response.data.events;
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
</script>

<style></style>