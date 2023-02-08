<template>
  <section>
    <the-navbar />
    <main class="footerfixer">
      <div class="container">
        <router-view />
      </div>
    </main>
    <the-footer />
  </section>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style>
	@import '/public/styles.css';
</style>
