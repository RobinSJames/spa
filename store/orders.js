// const resource = 'products'
export const state = () => ({
  all: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/orders').then((res) => {
      commit('setItems', res.data)
    })
  }
}

export const mutations = {
  setItems(state, products) {
    state.all = products
  }
}
