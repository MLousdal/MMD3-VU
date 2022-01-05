<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-picture :src="`/images/${article.img}`" :alt="article.title"></nuxt-picture>
      <nuxt-content :document="article" class="offset-top"></nuxt-content>
    </main>
    <sub-nav title="Principprogrammer" :links="links" :top-link="topLink"></sub-nav>
  </div>
</template>

<script>
import SubNav from '~/components/SubNav.vue'
export default {
  components: { SubNav },
  async asyncData({ $content, params }) {
    const article = await $content(
      'det-mener-vi/principprogrammer/',
      params.slug
    ).fetch()
    const links = await $content('det-mener-vi/principprogrammer')
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
        path: '/det-mener-vi'
      },
    }
  },
}
</script>

<style></style>
