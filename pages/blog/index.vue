<template>
  <div class="blog">
    <header-dark :has-logo="true" :is-blog="true" />
    <div class="blog__content">
      <h1 class="blog__title">
        Posts
      </h1>
      <div class="blog__cards">
        <nuxt-link v-for="(post, key) in posts" :key="key" :to="'/blog/' + key">
          <post-card class="card" :post="post" />
        </nuxt-link>
      </div>
    </div>
    <footer-x :is-dark="false" />
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
  background-color: pallete("reverse")
  min-height: 100vh
  &__content
    width: 740px
    margin: auto
    padding-bottom: 6rem
  &__title
    @include typho-strong-2
    @include font-size-x-large
    padding: 3rem 0
  &__cards
    & a
      text-decoration: none
      display: block
    & > *
      margin-bottom: 3rem
</style>
