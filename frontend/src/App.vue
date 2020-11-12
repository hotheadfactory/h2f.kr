<template>
  <div id="app">
    <img class="logo" src="./assets/splash.jpg" alt="Hothead Factory">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: black;
}
#app {
  font-family: 'Noto Sans CJK', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 100%
}

@media (min-width: 800px) {
  .logo {
    width: 800px
  }
}
</style>
