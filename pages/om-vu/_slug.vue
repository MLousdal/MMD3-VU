<template>
  <div class="article nav-offset wrapper">
    <main>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
    <sub-nav title="Andet om VU" :links="links" :sub-link="subLink"></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('om-vu', params.slug).fetch()
    const links = await $content('om-vu')
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
      subLink: {
        title: 'Samværspolitik',
        path: '/om-vu/samværspolitik/samværspolitik',
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
