<template>
  <div class="article nav-offset wrapper">
    <v-map class="lokal"></v-map>
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
    </main>
  </div>
</template>

<script>
import VMap from '~/components/VMap.vue'
export default {
  components: { VMap },
  async asyncData({ $content, params }) {
    const [article] = await $content('lokalforeninger').fetch()

    return {
      article,
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
