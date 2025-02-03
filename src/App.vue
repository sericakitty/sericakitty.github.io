<template>
  <header>
    <TheNavBar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="custom-container">
        <RouterView />
      </div>
    </div>
  </main>
  <TheFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import TheNavBar from 'Components/TheNavBar.vue'
import TheFooter from 'Components/TheFooter.vue'

export default {
  components: {
    RouterView,
    TheNavBar,
    TheFooter
  }
}

</script>

<style>
.custom-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0px;
}

main {
  flex-grow: 1;
  /* for fixing the footer */
  min-height: calc(88vh - 50px);
}

/* Hide the first main layout */
main:first-child {
  display: none;
}

/* Show the second main layout */
main:last-child {
  display: block;
}
</style>