<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-picture :src="`/images/${article.img}`"></nuxt-picture>
      <nuxt-content :document="article" class="offset-top"></nuxt-content>
    </main>
    <sub-nav></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(
      'det-mener-vi/princip-programmer/',
      params.slug
    ).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
