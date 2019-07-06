<template>
  <div class="wrapper">
    <div class="root">
      <header-dark :has-logo="false" :is-blog="false" />
      <logo-animated class="logo" />
      <section class="about-text">
        <h1 class="about-text__title">
          Sobre Nós
        </h1>
        <p>
          Somos uma organização formada por alguns entusiastas JS e zueiros. Nós
          fazemos alguns projetos apenas para aprendizado e diversão. Nós só
          usamos JavaScript <span class="heart">♥</span>.
        </p>
        <p>
          Em breve, projetos interessantes!
        </p>
      </section>
      <footer-dark />
    </div>
  </div>
</template>

<script>
import HeaderDark from '@/components/HeaderDark'
import FooterDark from '@/components/FooterDark'
import LogoAnimated from '@/components/LogoAnimated'

export default {
  components: {
    HeaderDark,
    FooterDark,
    LogoAnimated
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  background-color: pallete("primary")
  min-height: 100vh

.root
  width: 740px
  margin: auto

.header
  padding: 1rem
  display: flex
  justify-content: flex-end
  &__links
    display: inline-flex
    align-items: center
    & a
      padding: 0 1rem

.logo
  margin: 6rem 0

.anchor
  text-decoration: none
  &__text
    color: white
    font-size: 1.5rem
    @include typho-nav
    &:hover
      color: pallete("secondary")

.icon-github
  width: 32px

.about-text
  color: pallete("primary--reverse")
  margin: 6rem 0
  &__title
    @include typho-title-1
    padding: 1rem 1.2rem
    margin: 2rem 0
    background-color: pallete("secondary")
    display: inline-block
    border-radius: 8px
  & p
    @include typho-content-1
    padding: 1rem 0

.heart
  color: pallete("secondary")
  animation: heart-color 1s ease infinite

@keyframes heart-color
  from
    color: pallete("secondary")
  to
    color: pallete("primary--reverse")
</style>
