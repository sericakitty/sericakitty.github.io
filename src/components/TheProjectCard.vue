<template>
  <div class="project-card">
    <div class="project-image-container">
      <img :src="getProjectImageURL()" :alt="projectTitle" />
    </div>

    <div class="project-details">
      <h5>{{ projectTitle }}</h5>
      <p class="used-technologies">
        <img
          v-for="techName in technologyTitles"
          :key="techName"
          class="small-devicon"
          :src="getTechIconUrl(techName)"
          :alt="techName"
        />
      </p>
      <p v-for="info in additionalInfo" :key="info" class="heartbefore additional-info">
        {{ info }}
      </p>
      <div class="buttons">
        <a
          v-for="link in links"
          :key="link.text"
          :href="link.url"
          class="project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import tictactoe from '/assets/images/tictactoe.webp';

export default {
  props: {
    project: Object,
    technologies: Array,
  },
  data() {
    return {
      imageURL: '',
      projectTitle: this.project.title,
      additionalInfo: this.project.additionalInfo,
      links: this.project.links,
      technologyTitles: this.project.technologyTitles,
    };
  },
  methods: {
    getTechIconUrl(techName) {
      const tech = this.technologies.find((t) => t.title === techName);
      return tech ? tech.url : '';
    },
    getProjectImageURL() {
      switch (this.projectTitle) {
        case 'Tic-Tac-Toe':
          return tictactoe;
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped>
/* Technology icons */
.small-devicon {
  max-width: 45px;
  max-height: 45px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.used-technologies {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
}

/* Project card styles */
.project-card {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 10px;
  background-color: var(--color-card-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  flex: 1 1 calc(50% - 20px);
  max-width: 500px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.project-image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 15px;
}

.project-details h5 {
  margin-bottom: 10px;
}

.project-details p {
  color: var(--color-font-gray);
  font-size: 0.9rem;
  margin-bottom: 10px;
}

/* Buttons */
.buttons {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-button {
  text-decoration: none;
  color: white;
  background-color: var(--color-more-lighter-pink);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.project-button:hover {
  background-color: var(--color-light-pink);
  color: var(--color-more-lighter-pink);
  border-color: var(--color-more-lighter-pink);
  transform: translateY(-2px);
}

.project-button:active {
  transform: translateY(0);
}

/* Responsive styles */
@media (max-width: 568px) {
  .project-details p {
    font-size: 0.8em;
    line-height: 1.65;
  }

  .project-details {
    padding: 12px;
  }

  .small-devicon {
    max-width: 30px;
    max-height: 30px;
  }

  .project-card {
    width: 90%;
    margin: 10px auto;
    font-size: 0.9rem;
    max-width: 400px;
  }

  .project-button {
    padding: 4px 8px;
    font-size: 0.85rem;
    width: 40%;
  }

  .buttons {
    gap: 8px;
  }
}
</style>
