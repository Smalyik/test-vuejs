<template>
  <div class="row">
    <div class="col-4" v-for="card in cardsList" :key="card._id">
      <Card
        :name="card.name"
        :risk-ratio="card.risk_ratio"
        :expected-income="card.expected_income.first"
        :min-sum="card.min_sum"
        :start-date="card.period.start_date"
        :end-date="card.contract.execution_date"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Cards/Card'

export default {
  components: {
    Card
  },
  async beforeCreate () {
    const { data } = await axios('/products.json')
    this.$store.dispatch('SET_CARDS', data)
  },
  computed: {
    cardsList () {
      const cardsList = this.$store.state.filteredCardsList.filter((card, index) => {
        if (index + 1 > this.prevOffset && index + 1 <= this.offsetCount) {
          return card
        }
      })
      return cardsList
    },
    offsetCount () {
      return this.$store.state.page * 6
    },
    prevOffset () {
      return (this.$store.state.page - 1) * 6
    }
  }
}
</script>

<style lang="scss" scoped>
.col-4 {
  margin-bottom: 30px;
}
</style>
