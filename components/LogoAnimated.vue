<template>
  <div class="logo">
    <img
      alt="akatsukijs logo"
      src="~assets/imgs/akatsuki-js-cloud.svg"
      class="logo__cloud"
    />
    <img
      alt="Akatsuki JS"
      src="~assets/imgs/akatsuki-js-name.svg"
      class="logo__name"
    />
  </div>
</template>

<style lang="sass" scoped>
.logo
  display: flex
  flex-direction: column
  align-items: center
  animation: 0.5s show-intro ease
  &__cloud
    width: 480px
    animation: 6s cloud-animation infinite linear
    @media #{$breakpoint-2}
      width: 300px
  &__name
    margin-top: 2rem
    width: 320px
    @media #{$breakpoint-2}
      margin-top: 1rem
      width: 200px

@keyframes cloud-animation
  0%
    transform: rotateZ(0deg) translate(0px, 0px)
  30%
    transform: rotateZ(2deg) translate(0px, 10px)
  50%
    transform: rotateZ(1deg) translate(1px, 8px)
  70%
    transform: rotateZ(0deg) translate(0px, 4px)
  90%
    transform: rotateZ(-1deg) translate(1px, 2px)
  100%
    transform: rotateZ(0deg) translate(0px, 0px)

@keyframes show-intro
  0%
    transform: scale(0.1)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)
</style>
