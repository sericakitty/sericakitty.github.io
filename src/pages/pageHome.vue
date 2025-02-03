<template>
  <div class="container-fluid px-3">
    <div class="row align-items-start justify-content-center g-4 mb-4">

      <div class="col-lg-4 col-md-5 d-flex flex-column align-items-center">
        <div class="pic-logo-wrapper text-center">
          <img class="self_pic" src="/assets/images/serica_kitty.webp" alt="Serica Kitty picture" />
          <img class="self_logo mt-4" src="/assets/images/serica_kitty_logo.webp" alt="Serica Kitty logo" />
        </div>
      </div>

      <div class="col-lg-8 col-md-7">
        <div class="intro-wrapper">
          <h1>About Me</h1>
          <div class="textfield">
            <p>
              I'm a <strong>Full Stack Developer</strong> from Helsinki with a passion for <strong>web technologies</strong>, <strong>IoT</strong>, and <strong>cybersecurity</strong>. My journey began in 2020 through self-study, leading me to pursue a <strong>BBA in Business Information Technology</strong> at Haaga-Helia (GPA 4.87/5), combining academic knowledge with hands-on experience in <strong>full-stack development</strong> and <strong>robotics</strong>.
            </p>
            <p>
              I've strengthened my expertise with courses like the <strong>Full Stack Open</strong> from the University of Helsinki and gained industry experience at <strong>Virittämö Helsinki</strong>, working with <strong>MERN-stack technologies</strong> in an <strong>Agile environment</strong>. My projects span from <strong>IoT systems</strong> to <strong>real-time dashboards</strong>, showcasing <strong>technical skills</strong>, <strong>problem-solving</strong>, and <strong>teamwork</strong>.
            </p>
            <p>
              Beyond professional work, I actively develop <strong>personal projects</strong>, mentor others in <strong>programming</strong>, and explore <strong>embedded systems</strong>. I also express my creativity through <strong>music</strong> as a <strong>DJ & artist</strong>, blending technical and artistic pursuits.
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
        Frontend: ["React, Redux, Next.js", "Vue.js, Pinia", "TypeScript, JavaScript ES6+", "CSS3, HTML5, Bootstrap"],
        Backend: ["Node.js, Express, Deno", "Python3, Django, PyScript", "Java, Spring Boot", "REST APIs"],
        Databases: ["MongoDB", "PostgreSQL, SQLite"],
        "Development Tools": ["Git, GitHub, CI/CD", "Docker, Azure", "Testing (Jest, Cypress)", "Figma, UI/UX Design"],
        IoT: ["IoT Development (C++, Python)", "3D Modeling (Blender) and Printing"],
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
}

.self_pic {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.self_logo {
  width: 300px;
  height: auto;
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
