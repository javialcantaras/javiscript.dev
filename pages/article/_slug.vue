<template>
<div>
  <blog-article :articleData='articleData'>
    <no-ssr>
      <DynamicMarkdown
        :render-func="renderFunc"
        :static-render-funcs="staticRenderFuncs" />
    </no-ssr>
  </blog-article>
</div>
</template>

<script>
import article from '@/components/article'
import DynamicMarkdown from '@/components/markdown/DynamicMarkdown'

export default {

  async asyncData ({params, app}) {
    const fileContent = await import(`~/contents/blog/articles/${params.slug}.md`)
    const attr = fileContent.attributes
    return {
      articleData: attr,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns,
    }
  },

  transition: {
    name: 'fade'
  },

  components: {
    'blog-article': article, DynamicMarkdown
  }
}
</script>

<style lang='sass'>
.fade-enter-active, .fade-leave-active
  transition: opacity .2s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

