<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
    <sub-nav></sub-nav>
  </div>
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
