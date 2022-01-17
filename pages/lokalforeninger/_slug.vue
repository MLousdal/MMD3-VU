<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <v-map class="lokal"></v-map>
    </main>
    <sub-nav title="Find Lokalforeninger" :links="links" dir></sub-nav>
  </div>
</template>

<script>
import VMap from '~/components/VMap.vue'
export default {
  components: { VMap },
  async asyncData({ $content, params }) {
    const [article] = await $content('lokalforeninger').fetch()
    const links = await $content('lokalforeninger', { deep: true })
      .only(['title', 'dir'])
      .where({ slug: 'index' })
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      links,
    }
  },
  head() {
    return {
      title: this.article.title + '- Venstres Ungdom',
    }
  },
}
</script>

<style></style>
