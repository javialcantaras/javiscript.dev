<template>
  <div class='article-list'>
    <div
      class='element'
      v-for='article in articles'
      @click='article.click=true'
      :class='{"click-animation": article.click}'
      :key='article.name'>
      <img class='absolute' :src='getImage(article.name)' :alt='article.name' />
      <div class='absolute shadow'></div>
      <div class='article__info'>
        <span>{{article.readingTime}} de lectura</span>
        <nuxt-link :to="localePath({name: 'article-slug', params: { slug: article.name }})">
          <h2>{{article.title}}</h2>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'article-list',

  props: {
    articles: Array
  },

  data: () => ({
    images: ['chatbot','code','chatbot','code','chatbot','code', 'chatbot', 'code']
  }),

  methods: {
    getImage(name) {
      return require(`~/assets/${name}.png`)
    }
  }
}
</script>

<style lang='sass' scoped>
  @import '~assets/sass/media-queries'

  .absolute
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    height: 100%
    width: 100%
  
  .article-list
    margin-top: 1em
    display: flex
    display: flex
    flex-wrap: wrap

    .element
      height: 13em
      flex: 0 0 100%
      background: #ececec
      position: relative
      color: #fff
      transition: all .2s ease-in

      @include for-tablet-portrait-up
        flex: 0 0 50%
      @include for-tablet-landscape-up
        flex: 0 0 33%

      &:hover
        transform: scale(1.04)
        z-index: 1

        .shadow
          background: linear-gradient(to bottom, rgba(185, 185, 185, 0) 7%, rgba(0, 0, 0, 0.8) 57%)
        .article__info
          bottom: .5em
        
      img
        object-fit: cover

      .shadow
        background: linear-gradient(to bottom, rgba(185, 185, 185, 0) 7%, rgba(0, 0, 0, 0.6) 86%)

      .article__info
        transition: all .1s ease-in
        position: absolute
        left: 0
        bottom: 0
        padding: .5em

        a 
          text-decoration:  none
          &:visited
            text-decoration:  none

        h2
          min-height: 1.6em
          text-shadow: 1px 1px #383838
          color: #fff

        span
          font-size: .9em
          color: #dadada

</style>