// const resource = 'user'
export const state = () => ({
  all: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/users/user').then((res) => {
      commit('setItems', res.data)
    })
  }
}

export const mutations = {
  setItems(state, user) {
    state.all = user
  }
}
