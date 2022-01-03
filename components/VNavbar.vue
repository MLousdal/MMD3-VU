<template>
  <nav class="box">
    <div class="navContainer">
      <nuxt-link to="/" class="logo" aria-label="home">
        <div class="logo-bg">
          <img src="~/assets/icons/vu-logo.svg" alt="" />
        </div>
        <span class="bold xlarge-text">Venstres Ungdom</span>
      </nuxt-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <nuxt-link to="/" class="underline">Det mener vi</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="underline">Lokalforeninger</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="underline">Arrangementer</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="underline">Om VU</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="underline">Kontakt os</nuxt-link>
          </li>
          <cta-btn></cta-btn>
        </ul>
      </div>
    </div>
    <input
      type="image"
      src="/icons/mdi_menu.svg"
      alt="menu"
      class="icon filter-primary navBtn"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
import CtaBtn from './CtaBtn.vue'

export default {
  name: 'VNavbar',
  components: { CtaBtn },
  methods: {
    toggleMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')

      if (
        navLinksContainer.style.display === 'none' ||
        navLinksContainer.style.display === ''
      ) {
        navLinksContainer.style.display = 'flex'
      } else {
        navLinksContainer.style.display = 'none'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0;
  }
}
</style>
