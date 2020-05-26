// const resource = 'products'
export const state = () => ({
  all: [],
  single: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/treatments').then((res) => {
      commit('setItems', res.data)
    })
  },
  fetchItem({ commit }, { id }) {
    this.$axios.$get(`/treatments/${id}`).then((res) => {
      commit('setItem', res.data)
    })
  }
}

export const mutations = {
  setItems(state, treatments) {
    state.all = treatments
  },
  setItem(state, treatment) {
    state.single = treatment
  }
}
