<template>
  <main class="wrapper column nav-offset">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article"></nuxt-content>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('det-mener-vi/ordfører-områder/', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
