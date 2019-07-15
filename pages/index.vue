<template>
  <page>
    <div>
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

  head () {
    return {
      title: this.$t('home_title'),
      meta: [
        { name: "author", content: "Javier Alcantara" },
        { name: "description", property: "og:description", content: this.$t('home_description'), hid: "description" },
        { property: "og:title", content: this.$t('home_title') }
      ]
    };
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

