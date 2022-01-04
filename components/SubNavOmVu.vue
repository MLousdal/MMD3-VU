<template>
  <div class="subNav">
    <nav class="box">
      <h3>Andre områder</h3>
      <p>{{ links }}</p>
      <ul>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/arbejdsmarked-erhverv"
            >Arbejdsmarked og erhverv</nuxt-link
          >
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
    const links = await $content('om-vu').only(['title', 'slug']).fetch()

    return {
      links,
    }
  },
}
</script>

<style></style>
