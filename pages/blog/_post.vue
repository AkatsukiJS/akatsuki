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
      <div class="blog__cover">
        <img alt="cover" :src="post.image" />
      </div>
      <div class="blog__content">
        <contents :compiled="compiled" />
      </div>
    </div>
    <footer-light />
  </div>
</template>

<script>
import HeaderDark from '@/components/HeaderDark'
import FooterLight from '@/components/FooterLight'
const Vue = require('vue-template-compiler')

const contents = {
  props: ['compiled'],
  created() {
    this.$options.render = this.compiled.render
    this.$options.staticRenderFns = this.compiled.staticRenderFns
  }
}

export default {
  components: {
    contents,
    HeaderDark,
    FooterLight
  },
  data() {
    console.log(this.$store.state)
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
  background-color: pallete("reverse")
  min-height: 100vh
  &__post
    width: 740px
    margin: auto
    padding-top: 4rem
    padding-bottom: 6rem
  &__title
    @include typho-title-post
    padding: 1rem 0
    font-size: 3rem
  &__subtitle
    @include typho-subtitle
    color: #5a5a5a
    font-size: 1.5rem
    padding: 0.5rem 0 1.5rem
  &__author
    @include typho-subtitle
    color: #5a5a5a
    font-size: 1rem
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
      @include typho-subtitle
      font-size: 1.25rem
      line-height: 1.875rem
    & ::v-deep p
      padding: 1rem 0
    & ::v-deep h2, h3, h4, h5, h6
      font-weight: bolder
      padding: 0.7rem 0 0.5rem
    & ::v-deep h2
      font-size: 1.5rem
</style>
