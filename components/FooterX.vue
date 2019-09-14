<template>
  <footer :class="{ footer: true, footer__redline: redLine }">
    <div class="footer__wrapper">
      <div>
        <span class="footer__text">
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
        <img
          class="footer__logo"
          src="~/assets/imgs/akatsuki-js-name.svg"
          alt="akatsuki logo"
        />
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
    redLine: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.footer
  @include typho-strong-1
  @include font-size-small
  width: 100%
  padding: 2rem 0
  display: flex
  justify-content: center
  align-items: center
  background-color: pallete("primary")
  &__wrapper
    width: $size-desktop
    display: flex
    justify-content: space-between
    align-items: center
    @media #{$breakpoint-2}
      flex-direction: column
  &__redline
    border-top: 4px solid pallete("secondary")
  &__logo-link
    text-decoration: none
    display: inline-flex
    @media #{$breakpoint-2}
      margin-top: 1rem
  &__logo
    height: 1.2rem
  &__logo + &__logo
    margin-left: 0.25rem
  &__link
    color: pallete("secondary")
  &__text
    color: pallete("primary--reverse")
</style>
