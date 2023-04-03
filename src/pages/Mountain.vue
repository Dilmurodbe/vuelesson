<template>
  <ul v-for="item in salom" :key="item">
    <li>{{ item.title }}</li>
    <li>{{ item.metr }}</li>
    <li>{{ item.title }}</li>
    <li>{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "MountaionPage",
  data() {
    return {
      url: "https://api.nuxtjs.dev/mountains",
    };
  },
  computed: {
    salom() {
      return this.$store.getters["getMountain"];
    },
  },
  mounted() {
    this.$store.dispatch("getData", this.url);
  },
};
</script>
