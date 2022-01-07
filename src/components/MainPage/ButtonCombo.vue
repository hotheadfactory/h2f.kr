<template>
    <div class="button-combo-wrapper">
        <div class="button-single">
        <button type="button" class="btn btn-dark" onclick="location.href='https://blog.h2f.kr'">
        <img src="../../assets/apple-icon.png" width="18px"> Blog
        </button>
        </div>
        <div class="button-single">
        <button type="button" class="btn btn-dark" onclick="location.href='https://github.com/hotheadfactory'">
        <img src="../../assets/GitHub-Mark-Light-64px.png" width="18px"> GitHub
        </button>
        </div>
    </div>
</template>

<style scoped>
.btn {
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border-width: 0;
}

.btn-dark {
  background-color: #222222;
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
  width: 49%
}

.button-single>.btn {
  width: 100%
}
</style>
