const { Renderer } = require('marked')
const hglt = require('highlight.js')
const parser = require('./parser')
const renderer = new Renderer()
renderer.code = (code, lang) => {
  const codeHglt = hglt.highlight(lang, code).value
  return `<pre><code class="hljs language-${lang}">${codeHglt}</code></pre>`
}

module.exports = (markdown) => {
  const result = parser(markdown, {
    markedOptions: {
      renderer
    }
  })
  return `module.exports = ${JSON.stringify(result)}`
}
