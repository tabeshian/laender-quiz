<template>
  <div class="footer-wrapper">
    <transition name="slide" mode="out-in" appear>
      <div v-if="isRunning" class :key="country">{{country}}</div>
      <Button v-else />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Button from "@/components/Button";

export default {
  components: { Button },
  computed: {
    ...mapState({ isRunning: "gameIsRunning" }),
    ...mapGetters({ country: "currentCountry" })
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.footer-wrapper {
  overflow: hidden;
  background: $lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 2rem;
    text-align: center;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out 0.1s;
}
.slide-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
