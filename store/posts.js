const resolve = require.context('@/posts', true, /\.md$/)

const getName = (filename) => {
  return filename.replace(/(\.\/(.+)(.md))/, '$2')
}

const items = resolve.keys().reduce(
  (acc, key) => ({
    ...acc,
    [getName(key)]: resolve(key)
  }),
  {}
)

export const state = () => ({
  items
})

export const getters = {
  get: (state) => (name) => {
    return state.items[name]
  }
}
