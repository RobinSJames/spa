// const resource = 'products'
export const state = () => ({
  all: [],
  single: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/posts').then((res) => {
      commit('setItems', res.data)
    })
  },
  fetchItem({ commit }, { id }) {
    this.$axios.$get(`/posts/${id}`).then((res) => {
      commit('setItem', res.data)
    })
  }
}

export const mutations = {
  setItems(state, products) {
    state.all = products
  },
  setItem(state, product) {
    state.single = product
  }
}
