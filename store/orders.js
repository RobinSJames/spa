// const resource = 'orders'
export const state = () => ({
  all: [],
  favourites: [],
  local: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/orders').then((res) => {
      commit('SET_ITEMS', res.data)
    })
  },
  fetchFavourites({ commit }) {
    this.$axios.$get('/orders/favourites').then((res) => {
      commit('SET_FAVOURITES', res.data)
    })
  },
  fetchLocal({ commit }) {
    const local = localStorage.getItem('cart')
    if (local) {
      const parseLocal = JSON.parse(local)
      commit('GET_lOCAL', parseLocal)
    }
  },
  addLocal({ commit }, { obj }) {
    const local = localStorage.getItem('cart')
    if (!local) {
      localStorage.setItem('cart', JSON.stringify([obj]))
    } else if (local.length > 0) {
      const parseLocal = JSON.parse(local)
      const test = parseLocal.findIndex((x) => x.product === obj.product)
      if (test >= 0) {
        parseLocal.splice(test, 1)
        parseLocal.push(obj)
        localStorage.setItem('cart', JSON.stringify(parseLocal))
      } else {
        parseLocal.push(obj)
        localStorage.setItem('cart', JSON.stringify(parseLocal))
      }
    }
  }
}

export const mutations = {
  SET_ITEMS(state, orders) {
    state.all = orders
  },
  SET_FAVOURITES(state, orders) {
    state.favourites = orders
  },
  GET_lOCAL(state, orders) {
    state.local = orders
  },
  SET_lOCAL(state, orders) {
    state.local = orders
  }
}
