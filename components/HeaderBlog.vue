<template>
  <div class="header-blog">
    <nav class="header">
      <logo class="header__logo" />
      <ul class="header__links">
        <a target="_blank" href="https://github.com/akatsukijs/akatsuki">
          <img
            alt="github"
            class="icon-github"
            src="~assets/imgs/GitHub-Mark-Light-64px.png"
          />
        </a>
        <nuxt-link class="anchor" to="/blog">
          <span class="anchor__text">Blog</span>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
.header-blog
  display: flex
  justify-content: center
  background-color: pallete("primary")
  width: 100%
  border-bottom: 8px solid pallete("secondary")

.header
  width: 740px
  padding: 1.25rem 0
  display: flex
  justify-content: space-between
  &__logo
    width: 108px
  &__links
    display: inline-flex
    align-items: center
    & > *
      padding: 0 1rem

.icon-github
  width: 32px

.anchor
  padding: 0.625rem 0.8rem
  border-radius: 8px
  text-decoration: none
  background-color: pallete("secondary")
  color: pallete("reverse")
  &__text
    @include typho-nav
</style>
