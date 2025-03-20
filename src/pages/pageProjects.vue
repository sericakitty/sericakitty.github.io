<template>
  <h1 class="text-center">Web-game projects</h1>
  <div v-if="loading" class="loading-container">
    <p>Loading...</p>
  </div>
  <div v-else-if="dataHandlerError" class="error-container">
    <p>Error loading projects. Please try again later.</p>
  </div>
  <div v-else class="projects-container">
    <TheProjectCard v-for="project in webGameProjects" :key="project.id" :project="project" :technologies="technologies" />
  </div>
</template>


<script>
import TheProjectCard from 'Components/TheProjectCard.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      webGameProjects: ref([]),
      commandLineProjects: ref([]),
      technologies: ref([]),
      dataUrl: '../data.json',
      dataHandlerError: ref(false),
      loading: ref(true) // State to track loading
    }
  },
  components: {
    TheProjectCard
  },
  async created() { // when site is loaded, fetch data from data.json
    try {
      const response = await fetch(this.dataUrl);
      const data = await response.json();
      if (data) {
        this.technologies = data.technologies;
        this.webGameProjects = data.projects.filter(p => p.type === 'Webgame');
      }
    } catch (error) {
      this.dataHandlerError = true; // Set error state if fetching fails
    } finally {
      this.loading = false; // Set loading to false once data is fetched or an error occurs
    }
  }
}

</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 20px;
}


/* mobile mode rules */
@media (max-width: 568px) {
  .projects-container {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
}

.loading-container,
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
}
</style>
