<template>
  <div class="article nav-offset wrapper">
    <main>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
    <sub-nav></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('om-vu', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
