<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300&display=swap");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
  display: flex;
}
</style>
