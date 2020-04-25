export const fetchStoreItemsHelper = (resource, rootConfig) => (
  { dispatch },
  config
) => {
  config = { ...config, ...rootConfig }
  const { key } = config
  return dispatch('fetchItems', { resource, config, key }, { root: true })
}
export const fetchStoreItemHelper = (resource, rootConfig) => (
  { dispatch },
  config
) => {
  config = { ...config, ...rootConfig }
  const { id } = config
  return dispatch('fetchItem', { resource, config, id }, { root: true })
}

export const createStoreItemHelper = (resource, rootConfig) => (
  { dispatch },
  { config, data }
) => {
  config = { ...config, ...rootConfig }
  return dispatch('createItem', { resource, data, config }, { root: true })
}

export const updateStoreItemHelper = (resource, rootConfig) => (
  { dispatch },
  { config, data }
) => {
  config = { ...config, ...rootConfig }
  return dispatch('updateItem', { resource, data, config }, { root: true })
}

export const deleteStoreItemHelper = (resource, rootConfig) => (
  { dispatch },
  { config, data }
) => {
  config = { ...config, ...rootConfig }
  return dispatch('deleteItem', { resource, data, config }, { root: true })
}

export const createActions = (resource, config = {}) => ({
  fetchItems: fetchStoreItemsHelper(resource, config),
  fetchItem: fetchStoreItemHelper(resource, config),
  createItem: createStoreItemHelper(resource, config),
  updateItem: updateStoreItemHelper(resource, config),
  deleteItem: deleteStoreItemHelper(resource, config)
})
