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
          Somos um grupo formado por entusiastas de JavaScript, zueiros e
          adoradores de memes <span class="about-text__heart">♥</span>. Temos o
          objetivo de aprender coisas do multiverso JS e arredores, podendo às
          vezes também sair da zona de conforto e disseminar conhecimento de
          alguma forma. Acredite, isto pode acontecer.
        </p>
        <p>
          Para isso, faremos mini projetos ou posts no blog (sabemos fazer um
          blog com Nuxt). Esta é uma forma de engajar os participantes do grupo
          a fazer algum projeto aleatório (sem compromisso com nada) por meio da
          tripla aprender-fazer-disseminar. Isto pode funcionar às vezes, mas
          geralmente não, é só acreditar.
        </p>
        <p><i>&rsaquo;</i> Considerações</p>
        <ul>
          <li v-for="item in items" :key="item[0]">
            <i>{{ item[0] }} .</i> {{ item[1] }}
          </li>
        </ul>
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
  },
  computed: {
    items() {
      return [
        [
          1,
          `Não somos restritos apenas a JS (os arredores inclui os
          seus flavors/transpilers)`
        ],
        [2, 'Não temos medo de errar'],
        [3, 'Levamos tudo na zueira, nosso lema: "Fazemos tudo só de zoas"'],
        [
          4,
          `Não espere nada do grupo, fazemos algo quando você menos espera
           ou quando você achar que o grupo morreu (gostamos de surpreender)`
        ],
        [5, 'JS > Python, se afoba não, vai para 3'],
        [0, 'Achamos que usar JavaScript é terrível e frustante']
      ]
    }
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
  & p, & ul
    @include typho-strong-1
    @include font-size-large
    padding: 1rem 0
    @media #{$breakpoint-2}
      @include font-size-medium
  & li
    padding: 0 0 0.5rem
  & i
    color: pallete("secondary")
  &__heart
    color: pallete("secondary")
    animation: heart-color 1s ease infinite

@keyframes heart-color
  from
    color: pallete("secondary")
  to
    color: pallete("primary--reverse")
</style>
