<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <section class="card-grid">
        <nuxt-link
          v-for="afdeling in afdelinger"
          :key="afdeling.title"
          :to="`/lokalforeninger/afdelinger/${afdeling.slug}`"
          class="grow s"
          ><sub-card :content="afdeling" card-type=""></sub-card
        ></nuxt-link>
      </section>
    </main>
    <sub-nav
      title="Find Lokalforeninger"
      :links="links"
      :top-link="topLink"
    ></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('lokalforeninger/afdelinger', params.slug).fetch()
    const afdelinger = await $content('lokalforeninger/afdelinger')
      .only(['title', 'slug', 'img'])
      .sortBy('title', 'asc')
      .fetch()
    const links = await $content('lokalforeninger/afdelinger')
      .only(['title', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      links,
      afdelinger,
    }
  },
  data() {
    return {
      topLink: {
        title: 'Find din Lokalforening',
        path: '/lokalforeninger',
      },
    }
  },
}
</script>

<style></style>
