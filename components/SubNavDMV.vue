<template>
  <div class="subNav">
    <nav class="box">
      <h3>Ordfører områder</h3>
      <ul>
        <li>
          <nuxt-link to="/det-mener-vi/">Principprogrammer</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/arbejdsmarked-erhverv"
            >Arbejdsmarked og erhverv</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/eu">EU</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/klima-miljø-transport"
            >Klima, miljø og transport</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/retspolitik"
            >Retspolitik</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/skat-finans"
            >Skat og finans</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/social-sundhed-kommunal"
            >Social, Sundhed og Kommunal</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/det-mener-vi/ordfører-områder/uddannelse"
            >Uddannelse</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/det-mener-vi/ordfører-områder/udenrigs-forsvarspolitik"
            >Udenrigs og forsvarspolitik</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/det-mener-vi/ordfører-områder/udlændinge-og-intergration"
            >Udlændinge - og Intergration</nuxt-link
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
}
</script>

<style></style>
