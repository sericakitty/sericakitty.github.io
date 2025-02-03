<template>
  <footer class="footer">
    <div v-once>&copy; 2020 - {{ year }} {{ title }}. All Rights Reserved.</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: '',
      title: '',
    };
  },
  methods: {
    getCurrentYear() {
      this.year = new Date().getFullYear();
    },
  },
  beforeMount() {
    this.getCurrentYear();
    this.title = document.title;
  },
};
</script>

<style>
footer {
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-top: 30px;
}
</style>
