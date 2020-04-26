// const resource = 'products'
export const state = () => ({
  all: []
})

export const actions = {
  fetchItems({ commit }) {
    this.$axios.$get('/products').then((res) => {
      // console.log(res)
      commit('set', res.data)
    })
  }
}

export const mutations = {
  set(state, products) {
    state.all = products
  }
}
