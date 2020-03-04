<template>
  <div class="products">
    <header class="header">
      <Logo />
    </header>
    <div class="title">Страница {{ page }}</div>
    <Filters />
    <Cards />
    <Pagination />
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Cards from '@/components/Cards/Cards'
import Pagination from '@/components/Pagination'
import Filters from '@/components/Filters'

export default {
  name: 'products',
  components: {
    Logo,
    Cards,
    Pagination,
    Filters
  },
  computed: {
    page () {
      return this.$store.state.page
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
    padding: 40px 0;
}
.header {
    margin-bottom: 50px;
}
.title {
    margin-bottom: 40px;
}
</style>
