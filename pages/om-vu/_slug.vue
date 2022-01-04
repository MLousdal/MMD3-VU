<template>
  <div class="article nav-offset wrapper">
    <main>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
    <sub-nav-om-vu></sub-nav-om-vu>
  </div>
</template>

<script>
import SubNavOmVu from '~/components/SubNavOmVu.vue'
export default {
  components: { SubNavOmVu },
  async asyncData({ $content, params }) {
    const article = await $content('om-vu', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
