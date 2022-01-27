<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400%3b700&display=swap');

body {
  margin: 0;
  background: $secondary-color;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-color;
}

* {
  box-sizing: border-box;
}

</style>
