<template>
  <div class="main-wrapper">
    <Hud/>
    <Map/>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import Hud from "@/components/Hud.vue";

export default {
  name: "home",
  components: {
    Map,
    Hud
  }
};
</script>

<style lang="scss">
.main-wrapper {
  position: relative;
}
</style>

