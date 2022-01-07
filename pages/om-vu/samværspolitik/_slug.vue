<template>
  <div class="article nav-offset wrapper">
    <main>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
    <sub-nav title="Andet om VU" :links="links" :top-link="topLink"></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('om-vu/samværspolitik', params.slug).fetch()
    const links = await $content('om-vu/samværspolitik')
      .only(['title', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      links,
    }
  },
  data() {
    return {
      topLink: {
        title: 'Oversigt',
        path: '/om-vu/omvu',
      },
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
