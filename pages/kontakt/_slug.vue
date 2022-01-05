<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <section v-if="article.personer" class="card-grid">
        <sub-card
          v-for="person in article.personer"
          :key="person.name"
          :content="person"
          card-type="contact"
        ></sub-card>
      </section>
    </main>
    <sub-nav title="Andre områder" :links="links"></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('kontakt', params.slug).fetch()
    const links = await $content('kontakt')
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
