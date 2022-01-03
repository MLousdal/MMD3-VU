<template>
  <div>
    <div class="hero">
      <h1>TEST</h1>
      <so-me-links size="l"></so-me-links>
    </div>
    <main class="wrapper column">
      <h2>{{ kultur[0].title }}</h2>
      <nuxt-picture :src="`/images/${kultur[0].img}`"></nuxt-picture>
      <nuxt-content :document="kultur[0]"></nuxt-content>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const kultur = await $content('').fetch()

    return {
      kultur,
    }
  },
}
</script>
