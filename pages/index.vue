<template>
  <div class="home">
    <header-dark :has-logo="false" :is-blog="false" />
    <div class="home__wrapper">
      <logo-animated class="home__logo" />
      <section class="about-text">
        <h1 class="about-text__title">
          Sobre Nós
        </h1>
        <p>
          Somos uma organização formada por alguns entusiastas JS e zueiros. Nós
          fazemos alguns projetos apenas para aprendizado e diversão. Nós só
          usamos JavaScript <span class="about-text__heart">♥</span>.
        </p>
        <p>
          Em breve, projetos interessantes!
        </p>
      </section>
      <footer-x />
    </div>
  </div>
</template>

<script>
import HeaderDark from '@/components/HeaderDark'
import FooterX from '@/components/FooterX'
import LogoAnimated from '@/components/LogoAnimated'

export default {
  components: {
    HeaderDark,
    FooterX,
    LogoAnimated
  }
}
</script>

<style lang="sass" scoped>
.home
  background-color: pallete("primary")
  min-height: 100vh
  &__wrapper
    @include width-x
    @include padding-x
    margin: auto
  &__logo
    margin: 6rem 0

.about-text
  color: pallete("primary--reverse")
  margin: 6rem 0
  &__title
    @include typho-strong-1
    @include font-size-x-large
    padding: 0.5rem 1.2rem
    margin: 2rem 0
    background-color: pallete("secondary")
    display: inline-block
    border-radius: 8px
    @media #{$breakpoint-2}
      @include font-size-large
  & p
    @include typho-strong-1
    @include font-size-large
    padding: 1rem 0
    @media #{$breakpoint-2}
      @include font-size-medium
  &__heart
    color: pallete("secondary")
    animation: heart-color 1s ease infinite

@keyframes heart-color
  from
    color: pallete("secondary")
  to
    color: pallete("primary--reverse")
</style>
