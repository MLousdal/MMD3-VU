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
            <nuxt-link
              to="/det-mener-vi/"
              class="underline"
              @click.native="closeMenu"
              >Det mener vi</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/lokalforeninger/"
              class="underline"
              @click.native="closeMenu"
              >Lokalforeninger</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/arrangementer"
              class="underline"
              @click.native="closeMenu"
              >Arrangementer</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/om-vu/omvu"
              class="underline"
              @click.native="closeMenu"
              >Om VU</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/kontakt/kontakt-os"
              class="underline"
              @click.native="closeMenu"
              >Kontakt os</nuxt-link
            >
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
  data() {
    return {
      menuOpen: false,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrolledEffect)

    document.addEventListener('mouseup', function (e) {
      if (window.innerWidth < 970) {
        const container = document.querySelector('.navLinksContainer')
        if (!container.contains(e.target)) {
          container.style.display = 'none'
        }
      }
    })
  },
  destroyed() {
    document.removeEventListener('scroll', this.scrolledEffect)
    document.removeEventListener('mouseup', function (e) {
      if (window.innerWidth < 970) {
        const container = document.querySelector('.navLinksContainer')
        const navBtn = document.querySelector('.navBtn')

        if (!container.contains(e.target || navBtn)) {
          container.style.display = 'none'
        }
      }
    })
  },
  methods: {
    closeMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (window.innerWidth < 970) {
        navLinksContainer.style.display = 'none'
        this.menuOpen = false
      }
    },
    toggleMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (this.menuOpen === false) {
        navLinksContainer.style.display = 'flex'
        this.menuOpen = true
      } else {
        navLinksContainer.style.display = 'none'
        this.menuOpen = false
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
