<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
    <sub-nav
      title="Ordfører områder"
      :links="links"
      :top-link="topLink"
    ></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(
      'det-mener-vi/ordfører-områder/',
      params.slug
    ).fetch()
    const links = await $content('det-mener-vi/ordfører-områder')
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
        title: 'Principprogrammer',
        path: '/det-mener-vi',
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
