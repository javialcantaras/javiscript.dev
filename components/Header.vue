<template>
  <header>
    <aside v-if='isHome' class='header__logo'>
      <img src='@/static/javiscript-logo.svg' />
      <h1 class='header-title'>{{title}}</h1>
    </aside>
    <aside v-else class='header__logo'>
      <nuxt-link :to='localePath("index")'><img src='@/static/javiscript-logo.svg' /></nuxt-link>
      <span class='header-title'>{{title}}</span>
    </aside>
  </header>
</template>
<script>
export default {
  name: 'blog-header',

  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    title: 'Blog sobre desarrollo de software'
  })
}
</script>

<style lang='sass' scoped>
  @import '~assets/sass/media-queries'
  
  .header__logo 
    display: flex
    flex-direction: column
    margin: 0 .5em

    @include for-tablet-portrait-up
      margin: 0
    
    .header-title
      color: #505050
      color: #505050
      font-size: .8em

    img
      width: 15em
  
</style>