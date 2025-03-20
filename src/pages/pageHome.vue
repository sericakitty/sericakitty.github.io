<template>
  <div class="container-fluid px-3">
    <div class="row align-items-start justify-content-center g-4 mb-4">

      <div class="col-lg-4 col-md-5 d-flex flex-column align-items-center">
        <div class="pic-logo-wrapper text-center">
          <img class="self_pic" src="/assets/images/serica_cv_pic.webp" alt="Serica CV picture" />
        </div>
      </div>

      <div class="col-lg-8 col-md-7">
        <div class="intro-wrapper">
          <h1>About Me</h1>
          <div class="textfield">
            <p>
              I'm a <strong>Full Stack Developer</strong> from Helsinki with a deep passion for <strong>web technologies</strong>, <strong>IoT</strong>, and <strong>cybersecurity</strong>. My journey
              into software development began in 2020 through self-study, eventually leading me to pursue a <strong>BBA in Business Information Technology</strong> at Haaga-Helia (GPA 4.88/5).
              Throughout my studies, I've combined academic knowledge with hands-on experience in <strong>full-stack development</strong>, <strong>embedded systems</strong>, and
              <strong>robotics</strong>.
            </p>
            <p>
              To further expand my expertise, I have completed industry-recognized courses like the <strong>Full Stack Open</strong> from the University of Helsinki. I’ve also gained valuable industry
              experience at <strong>Virittämö Helsinki</strong>, where I worked with <strong>MERN-stack technologies</strong> in an <strong>Agile environment</strong>. My projects range from
              <strong>IoT-driven systems</strong> to <strong>real-time dashboards</strong>, demonstrating my ability to solve complex problems, build scalable solutions, and collaborate effectively
              within a team.
            </p>
            <p>
              Beyond my professional work, I am deeply involved in <strong>personal projects</strong>, mentoring aspiring developers, and exploring new innovations in <strong>embedded
                systems</strong>. My creativity also extends beyond coding—I’m a <strong>DJ & artist</strong>, blending technology with music to create unique experiences that bridge the worlds of art
              and engineering.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-section row g-4">
      <div class="col-lg-6 d-flex">
        <div class="skill-box flex-fill">
          <h3>Technical Expertise</h3>
          <div class="skill-group" v-for="(skills, category) in technicalSkills" :key="category">
            <h4>{{ category }}</h4>
            <ul>
              <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-flex">
        <div class="skill-box soft-skills flex-fill">
          <h3>Professional Skills</h3>
          <div class="skill-group">
            <h4>Work Culture & Methodology</h4>
            <ul>
              <li v-for="skill in professionalSkills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technicalSkills: {
        Frontend: [
          "React, Redux, Next.js",
          "Vue.js, Pinia",
          "TypeScript, JavaScript ES6+",
          "CSS3, HTML5, Bootstrap"
        ],
        Backend: [
          "Node.js, Express, Deno",
          "Python3, Django, PyScript",
          "Java, Spring Boot",
          "REST APIs"
        ],
        Databases: [
          "PostgreSQL, SQLite",
          "MongoDB"
        ],
        IoT: [
          "ESP32, Arduino, Raspberry Pi",
          "IoT Development (C++, Python)",
          "3D Modeling (Blender) and Printing"
        ],
        "Development Tools": [
          "Git, GitHub, CI/CD",
          "Docker, Azure",
          "Testing (Jest, Cypress)",
          "Figma, UI/UX Design"
        ],
      },
      professionalSkills: [
        "Agile Development & Project Planning",
        "Team Collaboration & Communication",
        "Problem Solving & Critical Thinking",
        "Leadership & Mentoring",
        "Time Management",
        "Continuous Learning",
        "Emotional Intelligence",
      ],
    };
  },
};
</script>



<style scoped>
.container-fluid {
  max-width: 1800px;
  margin: auto;
}

.pic-logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  max-width: 100%;
  margin-top: 1rem;
}

.self_pic {
  width: 400px;
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}


.skills-section {
  margin-top: 2rem;
}

.skill-box {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 30px;
  height: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
}

.skill-box:hover {
  transform: translateY(-3px);
}

.skill-group h4 {
  color: var(--color-more-lighter-pink);
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.skill-group ul {
  list-style: none;
  padding-left: 0;
}

.skill-group li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
  font-size: 0.95rem;
}

.skill-group li::before {
  content: "•";
  color: var(--color-more-lighter-pink);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Media queries for better responsive behavior */
@media (min-width: 768px) and (max-width: 1024px) {
  .self_pic {
    width: 80%; /* Reduced from 100% */
    min-width: 280px;
    max-width: 350px;
    margin: 3rem 0 2.5rem 0;
  }

  .pic-logo-wrapper {
    margin-top: 2rem;
    padding: 15px;
  }

  .intro-wrapper {
    padding: 15px 20px;
    margin-top: 2rem;
  }

  .textfield p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
}

@media (min-width: 1024px) and (max-width: 1200px) {
  .self_pic {
    width: 320px;
    margin: 2.5rem 0 2rem 0;
  }

  .pic-logo-wrapper {
    margin-top: 1.5rem;
  }

  .intro-wrapper {
    padding-right: 20px;
    margin-top: 1.5rem;
  }

  .textfield p {
    font-size: 1rem;
    line-height: 1.7;
  }
}

@media (max-width: 767.98px) {
  .container-fluid {
    padding: 0px;
  }

  .intro-wrapper {
    padding: 10px;
    text-align: left;
  }

  .skill-box {
    padding: 15px;
    margin-bottom: 4px;
  }

  .self_logo {
    width: 200px;
    height: auto;
  }
}
</style>
