import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsList: [],
    filteredCardsList: [],
    page: 1
  },
  mutations: {
    SET_CARDS (state, cardsList) {
      state.cardsList = cardsList
    },
    SET_FILTERED_CARDS (state, filteredCardsList) {
      state.filteredCardsList = filteredCardsList
    },
    SET_PAGE (state, page) {
      state.page = page
    }
  },
  actions: {
    SET_CARDS: (context, payload) => {
      context.commit('SET_CARDS', payload)
      context.commit('SET_FILTERED_CARDS', payload)
    },
    SET_FILTERED_CARDS: (context, payload) => {
      context.commit('SET_FILTERED_CARDS', payload)
    },
    RESET_FILTERED_CARDS: (context) => {
      context.commit('SET_FILTERED_CARDS', context.state.cardsList)
    },
    SET_PAGE: (context, payload) => {
      context.commit('SET_PAGE', payload)
    }
  },
  modules: {
  }
})
