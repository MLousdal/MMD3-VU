<template>
  <div class="subNav">
    <nav class="box">
      <h3>Andre områder</h3>
      <p>{{ links }}</p>
      <ul>
        <li>
          <nuxt-link to="/om-vu/omvu"
            >Om VU</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/om-vu/historie"
            >Historie</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/om-vu/karrieremuligheder"
            >Karrieremuligheder</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/om-vu/medlemsblad"
            >Medlemsblad</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/om-vu/struktur"
            >Struktur</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/om-vu/udvalg"
            >Udvalg</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/om-vu/videoer"
            >Videoer</nuxt-link
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
