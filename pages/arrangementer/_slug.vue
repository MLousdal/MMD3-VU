<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <section class="card-grid">
        <nuxt-link
          v-for="event in events"
          :key="event.title"
          :to="`/arrangementer/kommende-begivenheder/${event.slug}`"
          class="grow s"
          ><sub-card :content="event" card-type="event"></sub-card
        ></nuxt-link>
      </section>
    </main>
    <sub-nav title="Andre arrangementer" :links="links" :top-link="topLink"></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [article] = await $content('arrangementer').fetch()
    const events = await $content('arrangementer/kommende-begivenheder').fetch()
    const links = await $content('arrangementer/kommende-begivenheder')
      .only(['title', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      links,
      events,
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
