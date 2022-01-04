<template>
  <nav class="box top">
    <div class="navContainer">
      <nuxt-link to="/" class="logo" aria-label="home">
        <div class="logo-bg">
          <img src="~/assets/icons/vu-logo.svg" alt="" />
        </div>
        <span class="bold xlarge-text capitalize">Venstres Ungdom</span>
      </nuxt-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <nuxt-link to="/det-mener-vi/" class="underline"
              >Det mener vi</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/lokalforeninger/" class="underline"
              >Lokalforeninger</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/arrangementer" class="underline"
              >Arrangementer</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/om-vu" class="underline">Om VU</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/kontakt" class="underline">Kontakt os</nuxt-link>
          </li>
          <cta-btn size="l"></cta-btn>
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
  mounted() {
    document.addEventListener('scroll', this.scrolledEffect)
  },
  destroyed() {
    document.removeEventListener('scroll', this.scrolledEffect)
  },
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
    scrolledEffect() {
      if (window.scrollY > 0) {
        if (!this.$el.classList.contains('scrolled')) {
          this.$el.classList.add('scrolled', 'shadow', 's')
        }
      } else {
        this.$el.classList.remove('scrolled', 'shadow', 's')
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
