<template>
  <div class="hello">
    <img class="logo" src="../../assets/splash.jpg" alt="Hothead Factory">
    <h2>Available Services:</h2>
    <services />
    <button-combo />
    <copyright />
  </div>
</template>

<script>
import ButtonCombo from './ButtonCombo.vue'
import Copyright from './Copyright.vue'
import Services from './Services.vue'

export default {
  components: {
    ButtonCombo,
    Copyright,
    Services
  }
}
</script>

<style scoped>
.logo {
  width: 100%;
  margin-bottom: -100px;
}

@media (min-width: 600px) {
  .logo {
    width: 600px;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
}
.hello {
  color: white;
}
</style>
