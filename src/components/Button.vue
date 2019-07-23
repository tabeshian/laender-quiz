<template>
  <button key="button" @click="onButtonClick">Neues Spiel</button>
</template>

<script>
import { TweenLite } from "gsap";
import { mapState } from "vuex";
export default {
  mounted() {},
  computed: {
    ...mapState(["gameIsRunning"])
  },
  methods: {
    onButtonClick() {
      this.$store.commit("startGame");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
button {
  border-radius: 2px;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1.5rem;
  outline: none;
  background: $darkgrey;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:active {
    opacity: 1;
  }
}
</style>
