<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <!-- toggler -->
      <button class="navbar-toggler ms-auto" type="button" @click="toggleNav" aria-controls="navbarNav" :aria-expanded="showNav ? 'true' : 'false'"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" :class="{ 'show': showNav, 'show-animate': showNav }" id="navbarNav">
        <ul class="navbar-nav custom-dropdown ms-auto me-auto">
          <li v-for="link in navibarLinks" :key="link.name" class="nav-item">
            <router-link :to="{ name: link.name }" class="nav-link navtext" @click="closeNav">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  computed: {
    navibarLinks() {
      return [
        { name: 'pageHome', title: 'About me' },
        { name: 'pageProjects', title: 'Projects' },
        { name: 'pageMusic', title: 'Music' },
        { name: 'pageContact', title: 'Contact' },
      ];
    },
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    closeNav() {
      this.showNav = false;
    },
  },
};
</script>

<style>
/* Navbar overall styling */
nav {
  margin-bottom: 40px;
  background: var(--color-pastel-lilac);
  padding: 5px 0;
  background-image: var(--color-gradiant-pink);
}

/* Navbar link styling */
.nav-link {
  color: var(--color-light-black) !important;
  transition: color 0.3s ease-in-out;
}

.nav-link.router-link-active {
  color: var(--color-magenta) !important;
  font-weight: bold;
}

/* Navbar item styling */
.nav-item {
  font-size: 1.35rem;
  font-weight: 500;
  padding: 0px 10px;
}

/* Hover and focus effects for nav items */
.nav-item:hover,
.nav-item:focus {
  background-color: var(--color-pink);
  color: var(--color-magenta);
  border-radius: 5px;
}


/* Toggler button styling */
.navbar-light .navbar-toggler {
  border-color: transparent;
}

/* Toggler button hover and focus effects */
.navbar-light .navbar-toggler:hover,
.navbar-light .navbar-toggler:focus {
  box-shadow: none;
}

/* Custom dropdown styling */
.collapse {
  position: absolute;
  top: 100%;
  right: 0;
  width: auto;
  background: var(--color-pastel-lilac);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
}

.collapse.show {
  display: block;
}

.collapse.show-animate {
  animation: fadeIn 0.3s ease-in-out;
}

/* Animation for dropdown */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Desktop and Tablet styles */
@media (min-width: 768px) {
  .navbar-nav {
    justify-content: flex-end;
    width: auto;
  }

  .collapse {
    position: static;
    display: block !important;
    max-height: none;
    width: auto;
    background: transparent;
    box-shadow: none;
    margin-left: auto;
    padding-right: 10px;
  }

  .navbar-nav .nav-item {
    display: inline-block;
    margin: 0 15px;
  }

  .navbar-toggler {
    display: none;
  }
}

/* Mobile styles */
@media (max-width: 767px) {
  .navbar-nav {
    text-align: center;
    flex-direction: column;
  }

  .collapse {
    width: 200px; /* Säädä tämän laatikon leveys */
  }

  .nav-item {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }
}

</style>