<template>
  <div class="root">
    <div>
      <span class="text">Todo o código está disponível no</span>
      <a class="link" href="https://github.com/akatsukijs">GitHub</a>
    </div>
    <a href="https://akatsuki.js.org">
      <img
        class="logo"
        src="~assets/imgs/akatsuki-js-name.svg"
        alt="akatsuki logo"
      />
      <img
        class="logo"
        src="~assets/imgs/akatsuki-js-cloud.svg"
        alt="akatsuki logo"
      />
    </a>
  </div>
</template>

<style lang="sass" scoped>
.root
  width: 100%
  padding: 1rem 0
  display: flex
  justify-content: space-between
  @include typho-footer

.text
  color: pallete("reverse")

.link
  color: pallete("secondary")

.logo
  height: 1.5rem
</style>
