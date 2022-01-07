<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
    </main>
    <sub-nav title="Find Lokalforeninger" :links="links"></sub-nav>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('lokalforeninger', params.slug).fetch()
    const links = await $content('lokalforeninger', { deep: true })
      .only(['title', 'path'])
      .where({ slug: 'index' })
      .sortBy('title', 'asc')
      .fetch()
    return {
      article,
      links,
    }
  },
}
</script>
<style></style>
