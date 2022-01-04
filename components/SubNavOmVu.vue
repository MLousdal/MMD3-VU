<template>
  <div class="subNav">
    <nav class="box">
      <h3>Andre områder</h3>
      <ul>
        <li v-for="link in links" :key="link.title">
          <nuxt-link :to="`/om-vu/${link.slug}`">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <so-me-links></so-me-links>
  </div>
</template>

<script>
import SoMeLinks from './SoMeLinks.vue'
export default {
  components: { SoMeLinks },
  async asyncData({ $content }) {
    const links = await $content('det-mener-vi/om-vu')
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()

    return {
      links,
    }
  },
}
</script>

<style></style>
