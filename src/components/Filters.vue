<template>
  <div class="filters">
    <select class="select" @change="changeFilter" v-model="filterType">
      <option value="all" disabled selected ref="selectPlaceholder">Категории продуктов</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.type"
        >{{ option.title }}
      </option>
    </select>
    <button class="button" @click="resetFilter">Сбросить фильтры</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    filterType: 'all',
    options: [
      {
        title: 'Безрисковые',
        type: 'risk-free'
      },
      {
        title: 'Умеренный риск',
        type: 'risk-moderate'
      },
      {
        title: 'Рисковые',
        type: 'risk-risky'
      }
    ]
  }),
  methods: {
    changeFilter () {
      const cardsList = this.$store.state.cardsList
      const filteredCards = []
      switch (this.filterType) {
        case 'risk-free':
          filteredCards.push(...cardsList.filter(card => +card.risk_ratio === 0))
          break
        case 'risk-moderate':
          filteredCards.push(...cardsList.filter(card => +card.risk_ratio === 0.5))
          break
        case 'risk-risky':
          filteredCards.push(...cardsList.filter(card => +card.risk_ratio === 1))
          break
      }
      this.$store.dispatch('SET_PAGE', 1)
      this.$store.dispatch('SET_FILTERED_CARDS', filteredCards)
    },
    resetFilter () {
      this.$store.dispatch('RESET_FILTERED_CARDS')
      this.filterType = 'all'
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  margin-bottom: 20px;
}
.select {
  height: 40px;
  margin-right: 10px;
  width: 220px;
  padding-left: 10px;
}
.button {
  border: 0;
  padding: 0 5px;
  line-height: 40px;
}
</style>
