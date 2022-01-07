<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
    </main>
    <sub-nav
      title="Find Lokalforeninger"
      :links="lokalforeninger"
      :top-link="topLink"
    ></sub-nav>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('lokalforeninger/sjælland', params.slug).fetch()
    const lokalforeninger = await $content('lokalforeninger/sjælland', {
      deep: true,
    })
      .where({ slug: { $ne: 'index' } })
      .only(['title', 'path'])
      .fetch()
    return {
      article,
      lokalforeninger,
    }
  },
  data() {
    return {
      topLink: {
        title: 'Sjælland',
        path: '/lokalforeninger/sjælland',
      },
    }
  },
}
</script>
<style></style>
