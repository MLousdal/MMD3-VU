<template>
  <div class="article nav-offset wrapper">
    <main>
      <h2>{{ article[0].title }}</h2>
      <nuxt-content :document="article[0]" class="offset-top"></nuxt-content>
      <ul>
        <li v-for="program in article[0].programmer" :key="program">
          <nuxt-link :to="`/det-mener-vi/princip-programmer/${program.toLowerCase().replaceAll(' ', '-')}`">{{
            program
          }}</nuxt-link>
        </li>
      </ul>
    </main>
    <sub-nav></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('det-mener-vi', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>

<style></style>
