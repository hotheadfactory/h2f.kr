<template>
  <div class="hello">
    <h2>Available Services:</h2>
    <div class="button-combo">
      <button type="button" class="btn btn-dark" onclick="location.href='https://hotheadfactory.com'">blog</button>
      <button type="button" class="btn btn-dark" onclick="location.href='https://www.youtube.com/channel/UCMFvYIfeIdZeEWR0hthBOXQ'">YouTube</button>
      <button type="button" class="btn btn-dark" onclick="location.href='https://www.instagram.com/hotheadfactory'">Instagram</button>
    </div>
    <div class="button-single">
      <button type="button" class="btn btn-dark" onclick="location.href='https://hotheadfactory.com'">GitHub</button>
    </div>
  </div>
</template>

<style scoped>
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

.btn {
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border-width: 0;
}

.btn-dark {
  background-color: #343A40;
  color: white;
}

.btn-dark:hover {
  background-color: gray;
}

.btn-dark:active {
  background-color: #343A40;
}

.button-combo, .button-single {
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px
}

@media (max-width: 300px) {
  .button-combo, .button-single {
    width: 100%;
  }

  .button-combo>.btn {
    width: 100% !important;
    margin-bottom: 5px;
  }
}

.button-combo>.btn {
  width: 32%
}

.button-single>.btn {
  width: 100%
}
</style>
