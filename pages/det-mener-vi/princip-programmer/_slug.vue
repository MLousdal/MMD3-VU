<template>
  <main class="wrapper column nav-offset">
    <h2>{{ article.title }}</h2>
    <nuxt-picture :src="`/images/${article.img}`"></nuxt-picture>
    <nuxt-content :document="article"></nuxt-content>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('det-mener-vi/princip-programmer/', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
