<template>
  <h1>DJ Serica Kitty</h1>
  <div class="textfield">
    <p>I'm a Finnish DJ girl who loves to to play all kinds of energetic and beautiful electronic music to get people 
    dancing to the beautiful melodies with powerful bass.</p>
    <p class="fw-bold">Genres:</p>
    <p>I specialize in J-Core, futurecore, J-Freeform, and various trance genres including J-Trance, J-Psytrance, and
      Psytrance (fullon). My repertoire also includes happy hardcore, UK hardcore, and freeform.</p>
    <p class="fw-bold">Familiar DJ equipments:</p>
    <p>My setups often include Pioneer CDJ 2000nxs players, DJM-mixers, and Rekordbox software with Pioneer controllers.
      I'm also experienced with Traktor DJ controllers (S4) and have begun producing my own music—watch for upcoming
      releases!</p>

    <div class="mixcloudDiv">
      <p>Listen to my mixes on Mixcloud:</p>
      <a href="https://www.mixcloud.com/sericakitty/" target="_blank" aria-label="Visit my mixcloud profile">
        <img class="music-icon" src="../assets/images/mixcloud_logo.svg" alt="Mixcloud logo and link"/>
    </a>
    </div>

    <div v-if="gigs.length !== 0">

      <h2>Events that I have hosted / been part of.</h2>
      <div class='events'>
        <TheEventList :events='events' />
      </div>

      <h2>Gigs Calendar</h2>
      <div class="gigs">
        <TheGigList :gigs="gigs" />
      </div>

    </div>
    <div v-else>
      <p class="text-center">Loading gigs and events...</p>
    </div>

  </div>
</template>

<script>
import TheEventList from "Components/TheEventList.vue";
import TheGigList from "Components/TheGigList.vue";
export default {
  data() {
    return {
      gigs: [],
      events: [],
      mixcloudLink: 'https://www.mixcloud.com/sericakitty/',
    };
  },
  components: {
    TheEventList,
    TheGigList
  },
  methods: {
    loadJSON() {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://raw.githubusercontent.com/sericakitty/gigs-and-events-logs/main/data.json', true);
        request.onload = () => {
          if (request.status === 200) {
            resolve(JSON.parse(request.responseText));
          } else {
            reject(new Error(`HTTP error! status: ${request.status}`));
          }
        };
        request.onerror = () => {
          reject(new Error("Network error"));
        };
        request.send();
      });
    },
    async loadData() {
      try {
        const data = await this.loadJSON();
        if (data) {
          this.gigs = data.gigs;
          this.events = data.events;
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }
  },
  beforeMount() {
    this.loadData();
  }
};
</script>

<style>
  .music-icon {
    max-width: 150px;
  }
</style>