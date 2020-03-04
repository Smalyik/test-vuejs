<template>
  <div class="hello">
    <img src="../assets/images/logo.svg" alt="Логотип Премьер БКС">
    <p v-text="msg" class="text-center"></p>
    <router-link to="products">Перейти к заданию</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .hello {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
  p {
    text-align: center;
    user-select: none;
  }
</style>
