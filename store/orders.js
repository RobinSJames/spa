// const resource = 'orders'
export const state = () => ({
  all: [],
  favourites: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/orders').then((res) => {
      commit('setItems', res.data)
    })
  },
  fetchFavourites({ commit }) {
    this.$axios.$get('/orders/favourites').then((res) => {
      commit('setFavourites', res.data)
    })
  }
}

export const mutations = {
  setItems(state, orders) {
    state.all = orders
  },
  setFavourites(state, orders) {
    state.favourites = orders
  }
}
