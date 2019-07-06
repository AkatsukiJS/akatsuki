<template>
  <footer :class="{ footer: true, 'footer--dark': isDark }">
    <div class="footer__wrapper">
      <div>
        <span :class="{ footer__text: true, 'footer__text--dark': isDark }">
          Todo o código está disponível no
        </span>
        <a
          target="_blank"
          class="footer__link"
          href="https://github.com/akatsukijs"
        >
          GitHub
        </a>
      </div>
      <nuxt-link class="footer__logo-link" to="/">
        <img class="footer__logo" :src="akatsukiNameLogo" alt="akatsuki logo" />
        <img
          class="footer__logo"
          src="~assets/imgs/akatsuki-js-cloud.svg"
          alt="akatsuki logo"
        />
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    akatsukiNameLogo() {
      const dark = require('@/assets/imgs/akatsuki-js-name-dark.svg')
      const light = require('@/assets/imgs/akatsuki-js-name.svg')
      return this.isDark ? light : dark
    }
  }
}
</script>

<style lang="sass" scoped>
.footer
  @include typho-footer
  width: 100%
  padding: 2rem 0
  display: flex
  justify-content: center
  align-items: center
  background-color: pallete('grey--light')
  &--dark
    background-color: pallete('primary')
  &__wrapper
    width: 740px
    display: flex
    justify-content: space-between
    align-items: center
  &__logo-link
    text-decoration: none
    display: inline-flex
  &__logo
    height: 1.2rem
  &__logo + &__logo
    margin-left: 0.25rem
  &__link
    color: pallete("secondary")
  &__text
    color: pallete("primary")
    &--dark
      color: pallete("primary--reverse")
</style>
