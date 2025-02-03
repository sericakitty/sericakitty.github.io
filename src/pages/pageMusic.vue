<template>
  <div class="container-fluid px-3">

    <a href="#giglist" class="gig-calendar-btn">Jump to Gig Calendar</a>

    <h1>Serica Kitty as an artist</h1>

    <div class="music-content">
      <div class="intro-section">
        <p>I'm Serica Kitty, a Finnish artist & DJ known for blending melodic, powerful, and high-energy electronic music. My sets are all about atmosphere, vibrant energy, and uplifting basslines—crafted to tell a story and keep your mind and soul dancing. I have also started producing my own music, so stay tuned for upcoming releases!" 🎶✨</p>

        <!-- Upcoming Gigs -->
        <div class="upcoming-gigs" v-if="upcomingGigs.length">
          <h2>🌸 Upcoming Gigs</h2>
          <ul>
            <li v-for="gig in upcomingGigs" :key="gig.id">
              <strong>{{ gig.day }} {{ gig.month }} {{ gig.year }} - {{ gig.title }} @ {{ gig.location }}</strong>
            </li>
          </ul>
        </div>


        <div class="info-box" v-for="(info, title) in djInfo" :key="title">
          <h3>{{ title }}</h3>
          <p>{{ info }}</p>
        </div>

        <div class="mixcloudDiv">
          <h3>Listen to my mixes on Mixcloud:</h3>
          <a :href="mixcloudLink" target="_blank" class="music-cloud-link">
            <img class="music-icon" src="/assets/images/mixcloud_logo.svg" alt="Mixcloud logo and link" />
          </a>
        </div>

        <div class="mixcloudDiv">
          <h3>and also on Soundcloud:</h3>
          <a :href="soundcloudLink" target="_blank" class="music-cloud-link soundCloudLink">
            Soundcloud
          </a>
        </div>

        <div v-if="gigs.length">
          <h3>Events I've participated hosting</h3>
          <div class='events gigs-responsive'>
            <TheEventList :events='events' />
          </div>

          <h3 id="giglist">Gig calendar</h3>
          <div class="gigs gigs-responsive">
            <TheGigList :gigs="gigs" />
          </div>
        </div>
        <div v-else>
          <p class="text-center">Loading gigs and events...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheEventList from "Components/TheEventList.vue";
import TheGigList from "Components/TheGigList.vue";
import { checkDateIsPast, formatDate } from "Helpers";

export default {
  data() {
    return {
      gigs: [],
      events: [],
      mixcloudLink: 'https://www.mixcloud.com/sericakitty/',
      soundcloudLink: 'https://soundcloud.com/sericakitty',
      djInfo: {
        Genres: "I specialize in high-energy and melodic electronic music, including J-Core, Futurecore, and J-Freeform. My sets also feature various trance styles such as J-Trance, J-Psytrance, and Psytrance (Full-On). Additionally, I love mixing Happy Hardcore, UK Hardcore, and Freeform for an uplifting and dynamic experience.",

        "DJ Equipment": "I perform using industry-standard professional gear, including Pioneer CDJ-3000 and 2000nxs players, DJM mixers, and Rekordbox software with Pioneer controllers. I'm also experienced with Traktor DJ controllers (S4)."
      }
    };
  },
  components: {
    TheEventList,
    TheGigList
  },
  async mounted() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/sericakitty/gigs-and-events-logs/main/data.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log(data);
      this.gigs = data.gigs;
      this.events = data.events;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
  computed: {
    upcomingGigs() {
      const allGigs = [];

      this.gigs.forEach(yearGigs => {
        yearGigs.giglist.forEach(gig => {
          if (!checkDateIsPast(gig.date)) {
            const date = formatDate(gig.date);
            allGigs.push({
              ...gig,
              day: date[0],
              month: date[1],
              year: date[2]
            });
          }
        });
      });

      return allGigs.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
    }
  }
};
</script>

<style scoped>
.gig-calendar-btn {
  display: block;
  margin: 20px 0;
  font-size: 1.2rem;
  color: var(--color-lighter-pink);
  text-decoration: none;
}

.soundCloudLink {
  color: black;
  text-decoration: none;
  font-size: 25px;
}

.container-fluid {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 0px;
}

.music-content {
  padding: 0 5px;
}

.intro-section {
  max-width: 1200px;
  margin: 0 auto;
}

.info-box {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 30px;
  margin: 25px 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.info-box h3 {
  color: var(--color-more-lighter-pink);
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.mixcloudDiv {
  text-align: left;
  margin: 50px 0;
  padding-left: 20px;
}

.music-cloud-link {
  display: inline-block;
  transition: transform 0.2s ease;
  margin-top: 10px;
}

.music-cloud-link:hover {
  transform: scale(1.1);
}

.music-icon {
  max-width: 150px;
  height: auto;
}

.events,
.gigs {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  overflow-x: auto;
  font-size: 1rem;
}

.gigs-responsive table {
  width: 100%;
  table-layout: fixed;
  word-wrap: break-word;
}

.gigs-responsive td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upcoming-gigs {
  background: var(--color-gradiant-pink);
  border-radius: 15px;
  padding: 25px;
  margin: 25px 0;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
  border: 2px solid var(--color-magenta);
}

.upcoming-gigs h2 {
  color: var(--color-magenta);
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
}

.upcoming-gigs ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.upcoming-gigs li {
  background: var(--color-light-pink);
  padding: 15px;
  margin: 10px 0;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-light-black);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}


@media (max-width: 768px) {
  .container-fluid {
    padding: 0;
  }

  .info-box {
    padding: 15px;
    margin: 15px 0;
  }

  .mixcloudDiv {
    margin: 30px 0;
    padding-left: 10px;
  }

  .music-icon {
    max-width: 130px;
  }

  h2 {
    margin: 30px 0 15px;
    font-size: 1.5rem;
  }

  .gigs-responsive {
    font-size: 0.8rem;
    overflow-x: auto;
  }

  .gigs-responsive table {
    font-size: 0.8rem;
  }
}
</style>
