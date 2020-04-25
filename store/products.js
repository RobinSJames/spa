import { createActions } from '~/utils'
const resource = 'products'
export const state = () => ({
  all: []
})

export const actions = {
  ...createActions(resource)
}

export const mutations = {}
