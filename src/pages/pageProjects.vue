<template>
  <h1 class="text-center">Web-game projects</h1>
  <div class="projects-container">
    <div v-if="dataHandleError" class="alert alert-danger" role="alert">
      <span>
        <strong>Oops!</strong> Something went wrong while fetching data.
      </span>
    </div>
    <div v-else>
      <TheProjectCard v-for="project in webGameProjects" :key="project.id" :project="project" :technologies="technologies" />
    </div>
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
      dataHandleError: ref(false)
    }
  },
  components: {
    TheProjectCard
  },
  async created() { // when site is loaded, fetch data from data.json
    try {
      const response = await fetch('../../public/data.json');
      const data = await response.json();
      if (data) {
        this.technologies = data.technologies;
        this.webGameProjects = data.projects.filter(p => p.type === 'Webgame');
        
      }
    } catch (error) {
      this.dataHandleError = true;
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
</style>
