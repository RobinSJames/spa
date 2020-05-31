// const resource = 'orders'
export const state = () => ({
  all: [],
  availability: {
    slots: [],
    count: null
  }
})

export const waitStart = (dispFunc, resource) => {
  dispFunc('wait/start', resource, { root: true })
}

export const waitEnd = (dispFunc, resource) => {
  dispFunc('wait/end', resource, { root: true })
}

export const actions = {
  // fetchItems({ commit }) {
  //   this.$axios.$get('/bookings').then((res) => {
  //     commit('SET_ITEMS', res.data)
  //   })
  // },
  createAvailability({ commit, dispatch }, obj) {
    waitStart(dispatch, 'create.availability')
    this.$axios.$post('/bookings/available', obj).then((res) => {
      commit('SET_AVAILABILITY', res.data)
      waitEnd(dispatch, 'create.availability')
    })
  }
}

export const mutations = {
  SET_ITEMS(state, bookings) {
    state.all = bookings
  },
  SET_AVAILABILITY(state, bookings) {
    state.availability.slots = bookings
    state.availability.count = bookings.length
  }
}
