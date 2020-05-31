// const resource = 'products'
export const state = () => ({
  all: [],
  single: []
})

export const waitStart = (dispFunc, resource) => {
  dispFunc('wait/start', resource, { root: true })
}

export const waitEnd = (dispFunc, resource) => {
  dispFunc('wait/end', resource, { root: true })
}

export const actions = {
  fetchItems({ commit }) {
    return this.$axios
      .$get('/treatments')
      .then((res) => {
        commit('setItems', res.data)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  fetchItem({ commit, dispatch }, { id }) {
    waitStart(dispatch, 'treatments')
    this.$axios.$get(`/treatments/${id}`).then((res) => {
      commit('setItem', res.data)
      waitEnd(dispatch, 'treatments')
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
