<template>
  <main class="wrapper column nav-offset">
    <h2>{{ article[0].title }}</h2>
    <nuxt-picture :src="`/images/${article[0].img}`"></nuxt-picture>
    <nuxt-content :document="article[0]"></nuxt-content>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('lokalforeninger', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
