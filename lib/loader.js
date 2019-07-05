const parser = require('./parser')

module.exports = (markdown) => {
  const result = parser(markdown)
  return `module.exports = ${JSON.stringify(result)}`
}
