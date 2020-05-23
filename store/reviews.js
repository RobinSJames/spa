// const resource = 'user'
export const state = () => ({
  all: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/reviews').then((res) => {
      commit('setItems', res.data)
    })
  },
  createItem({ commit }, obj) {
    this.$axios.$post('/reviews', obj).then((res) => {
      commit('setItem', res.data)
    })
  }
}

export const mutations = {
  setItems(state, review) {
    state.all = review
  },
  setItem(state, review) {
    state.all.push(review)
  }
}
