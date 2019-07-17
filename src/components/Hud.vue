<template>
  <div class="hud">
    <transition name="fade">
      <button v-show="!$store.state.gameIsRunning" @click="onButtonClick">starten</button>
    </transition>
    <transition name="fade">
      <div
        :key="$store.state.round"
        class="country"
        v-show="$store.state.gameIsRunning"
      >{{($store.state.randomCountries[$store.state.round])}}</div>
    </transition>
    <transition name="fade">
      <div class="score" v-show="$store.state.gameIsRunning">
        Punkte:
        <b>{{$store.state.score}}</b>
      </div>
    </transition>
    <transition name="fade">
      <div
        class="info"
        v-show="$store.state.round == 5"
      >Du hast {{$store.state.score}} von {{$store.state.rounds}} Richtige.</div>
    </transition>
    <transition name="fade">
      <div
        class="info"
        v-show="$store.state.round != 5 && $store.state.gameIsRunning"
      >Wähle das angezeigte Land in der Karte per Klick...</div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    onButtonClick() {
      this.$store.commit("startGame");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
.hud {
  box-sizing: border-box;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
  z-index: 1000;
  background: $blue-darker;
  color: $yellow;
  padding: 10px;
  height: 200px;
  width: 100%;
  display: grid;
  grid-template:
    "button score" 25%
    "country country" 50%
    "info info" 25% / 1fr 1fr;
  opacity: 0.9;
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
  }
  button {
    grid-area: button;
    border-radius: 2px;

    padding: 0.5rem 1rem;
    border: none;
    font-size: 1.2rem;
    outline: none;
    background: $green;
    color: white;
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.2s;
    &:hover,
    &:active {
      opacity: 1;
    }
  }
  .country {
    grid-area: country;
    font-size: 1.75rem;
  }
  .score {
    grid-area: score;
    justify-self: right;
    align-self: start;
  }
  .info {
    grid-area: info;
  }
}
// media queries
@media (min-width: 800px) {
  .hud {
    width: 400px;
  }
}
//transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
