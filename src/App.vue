<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.title {
  font-family: serif;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 10px;
  font-size: 2rem;
  color: $blue-lightest;
}
</style>
