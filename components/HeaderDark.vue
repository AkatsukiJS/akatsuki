<template>
  <div :class="{ 'header-wrapper': true, 'header-wrapper--blog': isBlog }">
    <nav :class="{ header: true, 'header--flex-end': !hasLogo }">
      <nuxt-link to="/">
        <logo v-if="hasLogo" class="header__logo" />
      </nuxt-link>
      <ul class="header__links">
        <li>
          <a target="_blank" href="https://github.com/akatsukijs/akatsuki">
            <img
              alt="github"
              class="icon-github"
              src="~assets/imgs/GitHub-Mark-Light-64px.png"
            />
          </a>
        </li>
        <li>
          <nuxt-link
            :class="{ header__link: true, 'header__link--red': isBlog }"
            to="/blog"
          >
            <span>Blog</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  },
  props: {
    hasLogo: {
      type: Boolean,
      default: false
    },
    isBlog: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.header-wrapper
  display: flex
  justify-content: center
  background-color: pallete("primary")
  width: 100%
  &--blog
    border-bottom: 4px solid pallete("secondary")
  @media #{$breakpoint-2}
    padding: 0 1rem

.header
  @include width-x
  padding: 1.25rem 0
  display: flex
  justify-content: space-between
  &__logo
    width: 105px
    @media #{$breakpoint-2}
      width: 72px
  &__links
    display: inline-flex
    align-items: center
    padding: 1.25rem 0
    & > *
      padding: 0 0.5rem
    @media #{$breakpoint-2}
      padding: 0.5rem 0
  &__link
    @include typho-strong-2
    @include font-size-large
    padding: 0.325rem 0.8rem
    border-radius: 8px
    text-decoration: none
    color: pallete("primary--reverse")
    @media #{$breakpoint-2}
      @include font-size-medium
    &:hover
      color: pallete("secondary")
    &--red
      background-color: pallete("secondary")
      color: pallete("primary--reverse")
      &:hover
        color: pallete("primary--reverse")
        background-color: pallete("secondary--dark")
  &--flex-end
    justify-content: flex-end

.icon-github
  width: 32px
</style>
