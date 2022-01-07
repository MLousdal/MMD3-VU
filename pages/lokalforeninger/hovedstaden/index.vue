<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <section class="card-grid">
        <nuxt-link
          v-for="forening in lokalforeninger"
          :key="forening.title"
          :to="`${forening.path}`"
          class="grow s"
          ><sub-card
            :region="forening.title"
            card-type="region"
            class="region"
          ></sub-card
        ></nuxt-link>
      </section>
    </main>
    <sub-nav title="Find Lokalforeninger" :links="links" dir></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('lokalforeninger/hovedstaden/index').fetch()
    const lokalforeninger = await $content('lokalforeninger/hovedstaden', {
      deep: true,
    })
      .where({ slug: { $ne: 'index' } })
      .only(['title', 'path'])
      .fetch()
    const links = await $content('lokalforeninger', { deep: true })
      .only(['title', 'dir'])
      .where({ slug: 'index' })
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      links,
      lokalforeninger,
    }
  },
}
</script>

<style></style>
