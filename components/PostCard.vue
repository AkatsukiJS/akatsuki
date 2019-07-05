<template>
  <div class="card">
    <h1 class="card__title">{{ info.title }}</h1>
    <h5 class="card__subtitle">{{ info.subtitle }}</h5>
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
  background-color: pallete("reverse")
  border-radius: 8px
  padding: 2rem 2.5rem
  box-sizing: border-box
  border: #f1f1f1 solid 1px
  box-shadow: 0px 5px 13px 1px rgba(0, 0, 0, 0.08)
  &__title
    @include typho-title-post
    font-size: 1.5rem
    color: pallete("primary")
  &__subtitle
    @include typho-subtitle
    color: #545454
    padding: 1.25rem 0
    font-size: 1.1rem
  &__tags
    &__text
      @include typho-nav
      font-size: 0.865rem
      color: pallete("reverse")
      background-color: pallete("secondary")
      padding: 0.25rem 0.5rem
      display: inline-block
      border-radius: 6px
    &__text + &__text
      margin-left: 0.5rem
  &__author
    padding: 0.5rem 0 0
    @include typho-subtitle
    color: #545454
    display: flex
    justify-content: flex-end
    &__text
      color: pallete("primary")
</style>
