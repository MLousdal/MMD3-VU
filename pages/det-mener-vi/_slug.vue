<template>
  <div class="article nav-offset wrapper">
    <main>
      <h2>{{ article.title }}</h2>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <section class="card-grid">
        <nuxt-link
          v-for="page in pages"
          :key="page.title"
          :to="`/det-mener-vi/principprogrammer/${page.slug}`"
          class="grow s"
          ><sub-card :content="page"></sub-card
        ></nuxt-link>
      </section>
    </main>
    <sub-nav
      title="Ordfører områder"
      :links="links"
      :top-link="topLink"
    ></sub-nav>
  </div>
</template>

<script>
import SubCard from '~/components/SubCard.vue'
import SubNav from '~/components/SubNav.vue'
export default {
  components: { SubCard, SubNav },
  async asyncData({ $content }) {
    const [article] = await $content('det-mener-vi').fetch()
    const pages = await $content('det-mener-vi/principprogrammer')
      .only(['title', 'slug', 'img'])
      .sortBy('title', 'asc')
      .fetch()
    const links = await $content('det-mener-vi/ordfører-områder')
      .only(['title', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      pages,
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
}
</script>

<style></style>
