<template>
  <div class="card">
    <h3 class="title">{{ name }}</h3>
    <div v-if="capitalProtection === '100%'" class="label">100% защита</div>
    <img class="mx-auto img" src="@/assets/images/product-default.svg" alt="Логотип продукта" />
    <ul class="info-list">
      <li class="info-item">
          <div class="info-text">{{ expectedIncome ? expectedIncome : 'Не ограничен'}}</div>
          <div class="info-text">Потенциальный доход</div>
      </li>
      <li class="info-item">
          <div class="info-text">{{ capitalProtection }}</div>
          <div class="info-text">Защита капитала</div>
      </li>
      <li class="info-item">
          <div class="info-text">{{ localedMinSum }}</div>
          <div class="info-text">Минимальная сумма</div>
      </li>
      <li class="info-item">
          <div class="info-text">{{ InvestmentTermInMonth }}</div>
          <div class="info-text">Срок в месяцах</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    riskRatio: {
      type: String,
      default: ''
    },
    expectedIncome: {
      type: String,
      default: ''
    },
    minSum: {
      type: String,
      default: ''
    },
    startDate: {
      type: String,
      default: ''
    },
    endDate: {
      type: String,
      default: ''
    }
  },
  computed: {
    capitalProtection () {
      const protection = 1 - +this.riskRatio
      return protection.toLocaleString('en', { style: 'percent', minimumFractionDigits: '0', maximumFractionDigits: '0' })
    },
    localedMinSum () {
      return new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: '0',
        maximumFractionDigits: '0' }).format(+this.minSum)
    },
    InvestmentTermInMonth () {
      const monthDiff = (startDate, endDate) => {
        if (endDate < startDate) {
          let dateTemp = endDate
          endDate = startDate
          startDate = dateTemp
        }

        let months = (endDate.getFullYear() - startDate.getFullYear()) * 12
        months -= startDate.getMonth() + 1
        months += endDate.getMonth()

        if (startDate.getDate() <= endDate.getDate()) {
          months += 1
        }

        return months
      }
      const startDate = new Date(this.startDate)
      const endDate = new Date(this.endDate)
      let monthesDiff = String(monthDiff(startDate, endDate))
      const lastNumberOfMonthesDiff = monthesDiff[monthesDiff.length - 1]
      if (lastNumberOfMonthesDiff === '1') {
        monthesDiff = `${monthesDiff} месяц`
      } else if (lastNumberOfMonthesDiff > 1 && lastNumberOfMonthesDiff < 5) {
        monthesDiff = `${monthesDiff} месяца`
      } else if (lastNumberOfMonthesDiff > 4 && lastNumberOfMonthesDiff < 10) {
        monthesDiff = `${monthesDiff} месяцев`
      }
      return monthesDiff
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 10px;
    position: relative;
    transition: box-shadow .3s;
    &:hover {
      box-shadow: 0px 0px 34px 0px rgba(0,0,0,0.75);
    }
}
.title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 50px;
    min-height: 38px
}
.label {
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid blue;
    padding: 0 5px;
}
.img {
    margin-bottom: 20px;
}
.info-item {
    display: flex;
    list-style: none;
}
.info-text {
    font-size: 12px;
    font-weight: 600;
    &:first-child {
        flex-basis: 110px;
    }
}
</style>
