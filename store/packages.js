// const resource = 'products'
export const state = () => ({
  all: [],
  single: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/packages').then((res) => {
      commit('setItems', res.data)
    })
  },
  fetchItem({ commit }, { id }) {
    this.$axios.$get(`/packages/${id}`).then((res) => {
      commit('setItem', res.data)
    })
  }
}

export const mutations = {
  setItems(state, packages) {
    state.all = packages
  },
  setItem(state, packages) {
    state.single = packages
  }
}
