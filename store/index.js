import Vue from 'vue'
import {
  objectExtract,
  setStoreItem,
  setStoreItems,
  apiDataToStateObject
} from '../utils'

export const waitStart = (dispatchFn, resource) => {
  dispatchFn('wait/start', resource, {
    root: true
  })
}

export const waitEnd = (dispatchFn, resource) => {
  dispatchFn('wait/end', resource, {
    root: true
  })
}
const buildActionURL = (resource, config) => {
  if (config.URL) {
    let url = config.URL
    Object.keys(config).forEach((key) => {
      url = url.replace(`:${key}`, config[key])
    })
    return url
  }
  return `/${resource.replace('.', '/')}`
}
const sanitizePagination = (meta) => {
  const result = {}
  result.totalRows = meta.totalItems
  result.perPage = 10
  result.totalPages = meta.totalPage
  result.currentPage = meta.currentPage
  return result
}

export const mutations = {
  SET_ITEMS: (state, { items, resource, key }) => {
    Vue.set(objectExtract(resource, state), key || 'all', items)
  },
  SET_ITEM: (state, { item, resource }) => {
    Vue.set(objectExtract(`${resource}.all`, state), item.id, item)
  },
  SET_PAGINATION: (state, { pagination, resource }) => {
    Vue.set(objectExtract(`${resource}`, state), 'pagination', pagination)
  }
}
export const actions = {
  fetchItems({ commit, dispatch }, { resource, config, key }) {
    waitStart(dispatch, `${resource}.index`)
    const params = {
      ...config.params
    }
    return this.$axios
      .$get(buildActionURL(resource, config), {
        params
      })
      .then((data) => {
        const items = apiDataToStateObject(data.data ? data.data : data)
        if (data.meta) {
          commit('SET_PAGINATION', {
            resource,
            pagination: sanitizePagination(data.meta.pagination)
          })
        }
        setStoreItems(commit, items, resource, key)
        waitEnd(dispatch, `${resource}.index`)
        return Promise.resolve(data)
      })
      .catch((error) => {
        setStoreItems(commit, [], resource, key)
        waitEnd(dispatch, `${resource}.index`)
        return Promise.reject(error)
      })
  },
  fetchItem({ commit, dispatch }, { resource, config, id }) {
    waitStart(dispatch, `${resource}.show`)
    const params = {
      ...config.params
    }
    return this.$axios
      .$get(`${buildActionURL(resource, config)}/${id}`, {
        params
      })
      .then((data) => {
        setStoreItem(commit, data, resource)
        waitEnd(dispatch, `${resource}.show`)
        return data
      })
      .catch((error) => {
        waitEnd(dispatch, `${resource}.show`)
        return Promise.reject(error)
      })
  },
  createItem({ commit, dispatch }, { data, resource, config }) {
    waitStart(dispatch, `${resource}.create.index`)
    const params = {
      ...config.params
    }
    return this.$axios
      .$post(buildActionURL(resource, config), data, {
        params
      })
      .then((data) => {
        const item = apiDataToStateObject(data.content ? data.content : data)
        setStoreItems(commit, item, resource)
        waitEnd(dispatch, `${resource}.create.index`)
        return data
      })
      .catch((error) => {
        waitEnd(dispatch, `${resource}.create.index`)
        return Promise.reject(error)
      })
  },
  updateItem({ commit, dispatch }, { data, resource, config }) {
    waitStart(dispatch, `${resource}.update.index`)
    const params = {
      ...config.params
    }
    return this.$axios
      .$put(buildActionURL(resource, config), data, {
        params
      })
      .then((data) => {
        const item = apiDataToStateObject(data.data ? data.data : data)
        setStoreItems(commit, item, resource)
        waitEnd(dispatch, `${resource}.update.index`)
        return data
      })
      .catch((error) => {
        waitEnd(dispatch, `${resource}.update.index`)
        return Promise.reject(error)
      })
  },
  deleteItem({ commit, dispatch }, { data, resource, config }) {
    waitStart(dispatch, `${resource}.delete.index`)
    const params = {
      ...config.params
    }
    return this.$axios
      .$delete(buildActionURL(resource, config), data, {
        params
      })
      .then((data) => {
        const item = apiDataToStateObject(data.data ? data.data : data)
        setStoreItems(commit, item, resource)
        waitEnd(dispatch, `${resource}.delete.index`)
        return data
      })
      .catch((error) => {
        waitEnd(dispatch, `${resource}.delete.index`)
        return Promise.reject(error)
      })
  },
  clientInit({ dispatch }) {
    return dispatch('customers/fetchItems')
  }
}
