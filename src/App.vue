<template>
  <div class="app">
    <Header class="header" />
    <Map class="map" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Map,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.app {
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 8fr 3fr;
  grid-gap: 1rem;
  padding: 1rem;
}
</style>
