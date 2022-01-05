<template>
  <div class="article nav-offset wrapper">
    <main>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
      <section class="video-grid">
        <sub-video
          v-for="video in article.videoer"
          :key="video"
          :video-url="video"
        ></sub-video>
      </section>
    </main>
    <sub-nav title="Andet om VU" :links="links"></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('om-vu/videoer').fetch()
    const links = await $content('om-vu')
      .only(['title', 'path'])
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
