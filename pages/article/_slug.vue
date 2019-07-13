<template>
<div>
  <blog-article>
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
    const fileContent = await import(`~/contents/create-vuejs-project.md`)
    const attr = fileContent.attributes
    return {
      name: params.slug,
      related: attr.related,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns,
      title: attr.title,
      urlTranslation: attr.urlTranslation
    }
  },

  components: {
    'blog-article': article, DynamicMarkdown
  }
}
</script>

<style lang='sass'>

</style>

