// Avaliable in
// https://github.com/jeovazero/attribs-loader-md/blob/master/index.js

const marked = require('marked')

const getBlockInfo = (text) => {
  const R_BLOCK_INFO = /(^\s*---)\s*((.|\s)*?)(^---)/gm
  const ans = R_BLOCK_INFO.exec(text)
  // 1 -> '---'
  // 2 -> attribute list
  // 3 -> '---'
  if (ans[2]) {
    return [ans[2], R_BLOCK_INFO.lastIndex]
  } else {
    console.err('The attribute list is invalid')
  }
}

const getAllItems = (text) => {
  const R_BLOCK_ITEM = /(- (\w+):\s*((.+)\s*))/gm
  let item
  const ans = []

  do {
    item = R_BLOCK_ITEM.exec(text)
    if (item) {
      ans.push(resolveItem(item))
    }
  } while (item)

  return ans
}

const resolveItem = (item) => {
  return {
    key: item[2],
    value: item[3].trim()
  }
}

const parser = (text, options = {}) => {
  const { DEBUG = 0, markedOptions = {} } = options
  const [info, lastIndex] = getBlockInfo(text)
  const attribs = getAllItems(info).reduce(
    (acc, cur) => ({
      ...acc,
      [cur.key]: cur.value
    }),
    {}
  )
  const contentMD = text.substr(lastIndex)
  const content = marked(contentMD, markedOptions)
  const result = { attribs, content }

  if (DEBUG) console.log(result)
  return result
}

module.exports = parser
