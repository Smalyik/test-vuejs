<template>
  <div v-if="amountCards">
    <button
      class="button"
      @click="goToPrevPage"
      >Назад
    </button>

    <button
      v-for="(pageNumber, index) in pages"
      :key="index"
      @click="goToPage(index+1)"
      :class="['button', page === index+1 ? 'active' : null]"
      >{{ index+1 }}
    </button>

    <button
      class="button"
      @click="goToNextPage"
      >Вперед
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    pages () {
      const pagesArray = this.$store.state.filteredCardsList
        .map((card, index) => {
          if (Number.isInteger(index / 6)) {
            return true
          }
        })
        .filter(page => page)
      return pagesArray
    },
    amountCards () {
      return this.$store.state.filteredCardsList.length > 5
    },
    page () {
      return this.$store.state.page
    }
  },
  methods: {
    goToPage (page) {
      this.$store.dispatch('SET_PAGE', page)
    },
    goToPrevPage () {
      return this.page !== 1 ? this.$store.dispatch('SET_PAGE', this.page - 1) : null
    },
    goToNextPage () {
      return this.page !== this.pages.length ? this.$store.dispatch('SET_PAGE', this.page + 1) : null
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid blue;
  padding: 0 5px;
  line-height: 40px;
  min-width: 50px;
  &.active {
    background-color: grey;
  }
  &+& {
    margin-left: 5px;
  }
}
</style>
