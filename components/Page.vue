<template>
  <div class='page'>
    <div class='page__content'>
      <blog-header/>
      <div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  name: 'page',

  components: {
    'blog-header': Header
  }
}
</script>

<style lang='sass' scoped>
@import '~assets/sass/media-queries'

.page
  display: flex
  flex-direction: column
  align-items: center

  .page__content 
    width: 100vw
    display: flex
    flex-direction: column

    @include for-tablet-portrait-up
      width: 96vw

    @include for-tablet-landscape-up
      width: 80vw

</style>
