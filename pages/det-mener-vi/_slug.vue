<template>
  <div class="article nav-offset wrapper">
    <main>
      <h2>{{ article[0].title }}</h2>
      <nuxt-content :document="article[0]" class="offset-bottom"></nuxt-content>
      <section class="card-grid">
        <nuxt-link
          v-for="program in article[0].programmer"
          :key="program"
          :to="`/det-mener-vi/princip-programmer/${program
            .toLowerCase()
            .replaceAll(' ', '-')}`"
          ><sub-card :content="program"></sub-card
        ></nuxt-link>
      </section>
    </main>
    <SubNavDMV></SubNavDMV>
  </div>
</template>

<script>
import SubCard from '~/components/SubCard.vue'
import SubNavDMV from '~/components/SubNavDMV.vue'
export default {
  components: { SubNavDMV, SubCard },
  async asyncData({ $content, params }) {
    const article = await $content('det-mener-vi', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
