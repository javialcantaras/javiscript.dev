<template>
  <page>
    <div>
      <article-list/>
    </div>
  </page>
</template>

<script>
import Page from '~/components/Page'
import ArticleList from '~/components/ArticleList'

export default {
  components: { Page, ArticleList },
  transition: {
    name: 'slide-fade'
  },
}
</script>

<style lang='sass'>

</style>

