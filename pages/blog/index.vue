<template>
  <div class="blog">
    <header-dark :has-logo="true" :is-blog="true" />
    <div class="blog__header">
      <h1 class="blog__title">
        Posts
      </h1>
    </div>
    <div class="blog__content">
      <div class="blog__cards">
        <nuxt-link v-for="(post, key) in posts" :key="key" :to="'/blog/' + key">
          <post-card class="card" :post="post" />
        </nuxt-link>
      </div>
    </div>
    <footer-x :red-line="true" />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard'
import HeaderDark from '@/components/HeaderDark'
import FooterX from '@/components/FooterX'

export default {
  components: {
    PostCard,
    HeaderDark,
    FooterX
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.posts = this.$store.state.posts.items
    console.log(this.posts)
  }
}
</script>

<style lang="sass" scoped>
.blog
  background-color: pallete("primary--reverse")
  min-height: 100vh
  &__content
    @include width-x
    @include padding-x
    margin: auto
    padding-bottom: 6rem
  &__header
    @include padding-x
    background-color: pallete("primary")
  &__title
    @include width-x
    @include typho-strong-2
    @include font-size-x-large
    animation: appear ease 0.5s
    margin: auto
    color: pallete("primary--reverse")
    padding: 1.5rem 0.5rem
    @media #{$breakpoint-2}
      @include font-size-large
      padding: 1.25rem 0.5rem
  &__cards
    padding: 3.75rem 0 0rem
    & a
      text-decoration: none
      display: block
    & > *
      margin-bottom: 3rem
    @media #{$breakpoint-2}
      padding: 3rem 0 1rem

@keyframes appear
  0%
    opacity: 0
    transform: translateY(-20px)
  50%
    opacity: 0.25
    transform: translateY(-5px)
  100%
    opacity: 1
    transform: translateY(0px)
</style>
