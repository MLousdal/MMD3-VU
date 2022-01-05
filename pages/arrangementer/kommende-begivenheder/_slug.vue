<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-picture :src="`/images/${article.img}`"></nuxt-picture>
      <nuxt-content :document="article" class="offset-top"></nuxt-content>
    </main>
    <sub-nav
      title="Andre arrangementer"
      :links="links"
      :top-link="topLink"
    ></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(
      'arrangementer/kommende-begivenheder',
      params.slug
    ).fetch()
    const links = await $content('arrangementer/kommende-begivenheder')
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
        path: '/arrangementer',
      },
    }
  },
}
</script>

<style></style>
