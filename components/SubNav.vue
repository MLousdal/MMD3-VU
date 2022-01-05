<template>
  <div class="subNav">
    <nav class="box">
      <h3>{{ title }}</h3>
      <ul>
        <li v-if="topLink">
          <nuxt-link :to="`${topLink.path}`">{{ topLink.title }}</nuxt-link>
        </li>
        <li v-for="link in links" :key="link.title">
          <nuxt-link :to="`${link.path}`">{{ link.title }}</nuxt-link>
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
  props: {
    topLink: {
      default() {},
      type: Object,
    },
    links: {
      default() {},
      type: Array,
    },
    title: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
