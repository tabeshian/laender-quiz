<template>
  <div class="top-wrapper">
    <svg width="100%" height="100%">
      <rect class="progress" height="100%" :width="`${progress}%`" />
    </svg>
    <div class="score-div">
      <span>{{score}}</span>
      <span>/</span>
      <span>{{round}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import colors from "@/assets/scss/main.scss";

export default {
  computed: {
    ...mapState({
      hide: "gameIsRunning",
      score: "score",
      round: "round",
      rounds: "rounds"
    }),
    progress() {
      return (this.round / this.rounds) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.top-wrapper {
  background: $lightgrey;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    rect {
      fill: $darkgrey;
    }
  }

  .score-div {
    z-index: 999;
    span {
      font-size: 1.5rem;
    }
  }
}

.progress {
  transition: all 0.3s ease;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease-out 0.1s;
}
.scale-enter {
  transform: scale(0.8);
  opacity: 0;
}
.scale-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
