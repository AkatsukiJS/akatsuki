<template>
  <div class="card">
    <h1 class="card__title">
      {{ info.title }}
    </h1>
    <h5 class="card__subtitle">
      {{ info.subtitle }}
    </h5>
    <div class="card__tags">
      <span v-for="tag in info.tags" :key="tag" class="card__tags__text">
        {{ tag }}
      </span>
    </div>
    <div class="card__author">
      <span>
        por <span class="card__author__text">{{ info.author }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    info() {
      return {
        ...this.post.attribs,
        tags: this.post.attribs.tags.replace(/(\[|\]|,)/g, '').split(' ')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  width: 100%
  background-color: pallete("primary--reverse")
  padding: 2rem 2.5rem
  box-sizing: border-box
  border: #f1f1f1 solid 1px
  border-left: pallete("primary") solid 3px
  box-shadow: 0px 5px 13px 1px rgba(0, 0, 0, 0.08)
  transition: transform ease 0.25s
  animation: appear ease 0.5s
  &:hover
    box-shadow: 0px 5px 16px 4px rgba(0.25, 0.25, 0.25, 0.06)
    transform: scale(1.03)
  @media #{$breakpoint-2}
    padding: 1.5rem 1.25rem
  &__title
    @include typho-strong-2
    @include font-size-large
    color: pallete("primary")
    @media #{$breakpoint-2}
      @include font-size-medium
  &__subtitle
    @include typho-normal-1
    @include font-size-medium
    color: pallete("grey")
    padding: 0.5rem 0 0.75rem
    @media #{$breakpoint-2}
      @include font-size-small
  &__tags
    &__text
      @include typho-strong-1
      @include font-size-x-small
      color: pallete("primary--reverse")
      background-color: pallete("secondary")
      padding: 0.25rem 0.5rem
      display: inline-block
      border-radius: 6px
    &__text + &__text
      margin-left: 0.5rem
  &__author
    padding: 0.75rem 0 0
    @include typho-normal-1
    @include font-size-small
    color: pallete("grey")
    display: flex
    justify-content: flex-end
    &__text
      color: pallete("primary")

@keyframes appear
  0%
    opacity: 0
    transform: translateY(-20px)
  50%
    opacity: 0.25
    transform: translateY(-5px)
  100%
    opacity: 1
    transform: translateY(0px)
</style>
