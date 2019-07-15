<template>
  <page>
    <div>
      {{$t('title')}}
      <article-list :articles='articles'/>
    </div>
  </page>
</template>

<script>
import Page from '~/components/Page'
import ArticleList from '~/components/ArticleList'
import articlesList from '~/contents/blog/articles'

export default {

  async asyncData ({app}) {
    async function asyncImport (articleName) {
      const file = await import(`~/contents/blog/articles/${articleName}.md`)
      return file.attributes
    }

    return Promise.all(articlesList.map(article => asyncImport(article)))
    .then(articles => ({ articles }))
  },

  components: { Page, ArticleList },
  
  transition: {
    name: 'fade'
  },
}
</script>

<style lang='sass'>
  .fade-enter-active, .fade-leave-active
    transition: opacity .2s
  .fade-enter, .fade-leave-to
    opacity: 0
</style>

