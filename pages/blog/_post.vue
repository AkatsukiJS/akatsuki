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
    <footer-x :is-dark="false" />
  </div>
</template>

<script>
import HeaderDark from '@/components/HeaderDark'
import FooterX from '@/components/FooterX'
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
    FooterX
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
  background-color: pallete("primary--reverse")
  min-height: 100vh
  &__post
    width: 740px
    margin: auto
    padding-top: 4rem
    padding-bottom: 6rem
  &__title
    @include typho-strong-2
    @include font-size-xx-large
    padding: 1rem 0
  &__subtitle
    @include typho-normal-1
    @include font-size-large
    color: pallete("grey")
    padding: 0.5rem 0 1.5rem
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
    & ::v-deep p
      padding: 1rem 0
    & ::v-deep h2, h3, h4, h5, h6
      font-weight: bolder
      padding: 0.7rem 0 0.5rem
    & ::v-deep h2
      font-size: 1.5rem
</style>
