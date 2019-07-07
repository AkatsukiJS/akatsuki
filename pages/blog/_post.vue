<template>
  <div class="blog">
    <header-dark :has-logo="true" :is-blog="true" />
    <div class="blog__post">
      <h1 class="blog__title">
        {{ post.title }}
      </h1>
      <h4 class="blog__subtitle">
        {{ post.subtitle }}
      </h4>
      <div class="blog__author">
        <span>
          por <a :href="post.authorlink" target="_blank">{{ post.author }}</a> /
          {{ post.date }}
        </span>
      </div>
      <div v-if="post.image" class="blog__cover">
        <img alt="cover" :src="post.image" />
      </div>
      <div class="blog__content markdown-body">
        <contents :compiled="compiled" />
      </div>
    </div>
    <footer-x :is-dark="false" />
  </div>
</template>

<script>
import HeaderDark from '@/components/HeaderDark'
import FooterX from '@/components/FooterX'
import '@/assets/css/dracula.css'
const Vue = require('vue-template-compiler')

const contents = {
  props: ['compiled'],
  created() {
    this.$options.render = this.compiled.render
    this.$options.staticRenderFns = this.compiled.staticRenderFns
  }
}

export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css'
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css'
        }
      ]
    }
  },
  components: {
    contents,
    HeaderDark,
    FooterX
  },
  data() {
    return {
      param: this.$route.params,
      post: null,
      compiled: null
    }
  },
  created() {
    const postName = this.$route.params.post
    const allPosts = this.$store.state.posts.items
    const currentPost = allPosts[postName]
    const { content, attribs } = currentPost
    const compiled = Vue.compileToFunctions(`<article>${content}</article>`)
    this.post = attribs
    this.compiled = compiled
  }
}
</script>

<style lang="sass" scoped>
.blog
  background-color: pallete("primary--reverse")
  min-height: 100vh
  &__post
    @include width-x
    @include padding-x
    margin: auto
    padding-top: 4rem
    padding-bottom: 6rem
  &__title
    @include typho-strong-2
    @include font-size-xx-large
    padding: 1rem 0
    @media #{$breakpoint-2}
      padding: 3rem 0 1rem
      @include font-size-x-large
  &__subtitle
    @include typho-normal-1
    @include font-size-large
    color: pallete("grey")
    padding: 0.5rem 0 1.5rem
    @media #{$breakpoint-2}
      @include font-size-medium
  &__author
    @include typho-normal-1
    @include font-size-small
    color: pallete("grey")
    & a
      color: pallete("secondary")
  &__cover
    padding: 2rem 0
    img
      object-fit: cover
      width: 100%
      height: 200px
  &__content
    & article
      @include typho-normal-1
      @include font-size-medium
    & /deep/ em, /deep/ i
      font-style: italic
    & /deep/ p
      margin: 1rem 0
    & /deep/ a
      color: pallete("secondary")
      text-decoration: underline
    & /deep/ h1, /deep/ h2, /deep/ h3, /deep/ h4, /deep/ h5, /deep/ h6
      font-weight: bolder
      line-height: 1.7
      padding: 0
      cursor: text
      position: relative
    & /deep/ h1
      font-size: 3rem
    & /deep/ h2
      font-size: 2.5rem
    & /deep/ h3
      font-size: 1.75rem
    & /deep/ h4
      font-size: 1.5rem
    & /deep/ h5
      font-size: 1.25rem
    & /deep/ h6
      font-size: 1.125rem
    & /deep/ pre
      background-color: #282a36
      display: block
      overflow-x: auto
      padding: 1em
      border-radius: 4px
      color: #f8f8f2
    & /deep/ pre, /deep/ code
      font-family: 'Fira Code', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
    & /deep/ ol
      list-style-type: decimal
    & /deep/ ul
      list-style-type: disc
</style>
