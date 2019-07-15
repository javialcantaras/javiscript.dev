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

  head() {
    const title = `${this.articleData.title} | javascript.dev`
    
    return {
      title,
      meta: [
        { name: "author", content: "Javier Alcantara" },
        { name: "description", property: "og:description", content: this.articleData.description, hid: "description" },
        { property: "og:title", content: title },
        { property: "og:image", content: this.ogImage }
      ]
    }
  },

  transition: {
    name: 'fade'
  },

  components: {
    'blog-article': article, DynamicMarkdown
  },

  computed: {
    ogImage () {
      return `${process.env.baseUrl}/images/blog/${this.articleData.name}/_thumbnail.jpg`;
    },
  }
}
</script>

<style lang='sass'>
.fade-enter-active, .fade-leave-active
  transition: opacity .2s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

