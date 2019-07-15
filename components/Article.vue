<template>
  <div>
    <blog-header class='article__header'/>
    <no-ssr>
      <parallax :speedFactor='0.25' >
        <img :src='getImage()'>
      </parallax>
    </no-ssr>

    <div class='article__content'>
      <article>
        <slot/>
      </article>
    </div>

    <div class='article__footer'>
      <NLink to='/'>
        <i class="large material-icons">arrow_back</i> Volver al home
      </NLink>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy"
import Header from './Header'

export default {
  name: 'page-with-parallax',

  props: {
    articleData: Object
  },

  components: {
    Parallax, 'blog-header': Header
  },

  methods: {
    getImage() {
      return require(`~/assets/${this.articleData.name}.png`)
    }
  }

}
</script>

<style lang='sass'>
  @import '~assets/sass/media-queries'

  $base-color: #40B77E;

  .Masthead
    min-height: 60vh !important

    img
      filter: opacity(30%)
  
  .article__header
    padding: 0 1em 
    padding-bottom: 1em
    
    @include for-tablet-landscape-up
      padding: 0 10em 1em 10em
  
  .article__content
    padding: 0 1em 
    @include for-tablet-landscape-up
      padding: 0 10em 
    

    article 
      color: #6b6b6b

      h1 
        font-size: 3em
        padding: 1em 0 .5em
        color: $base-color
        font-weight: 400
        
      h2 
        font-size: 2.5em
        padding: 1.5em 0 .2em
        color: $base-color
        font-weight: 400

      h3 
        font-size: 1.8em
        padding: .5em 0 .2em
        color: $base-color
        font-weight: 300

      a
        color: $base-color
        text-decoration: none
        font-weight: 900

      code.hljs
        background: #f1f1f1
        border-radius: 4px
        padding: 0.1em 0.5em
        border: 1px solid #cecece
        display: inline
      
      pre > code.hljs
        margin: 1em 0
        display: block
        padding: 1em

      img
        width: 100%

      table, tr
        border: 1px solid #c5c5c5

      table
        margin: 1em 0
        border-collapse: collapse
        background: #fff
        width: 100%

        thead
          $table-color: #4b9672
          background: $table-color
          color: #f3f3f3

          tr
            border: 1px solid $table-color

        th
          padding: 1em .8em

        td
          padding: .8em
      
      blockquote
        border-left: .25em solid #dfe2e5
        color: #6a737d
        padding: 0 1em

  
  .article__footer
    height: 2em
    color: #6B6B6B
    padding: 3em 0
    
    @include for-tablet-landscape-up
      padding: 3em 10em
    
    i
      font-size: 1em
      margin-right: .3em
    
    a
      color: $base-color
      text-decoration: none
      font-weight: 700
      display: flex
      flex-direction: row
      align-items: center

</style>
