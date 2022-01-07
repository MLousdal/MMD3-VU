<template>
  <div class="subNav">
    <nav class="box">
      <header>
        <h3>{{ title }}</h3>
        <input
          type="image"
          src="/icons/mdi_menu.svg"
          alt="menu"
          class="icon filter-primary navBtn"
          @click="toggleMenu"
        />
      </header>
      <ul class="subNavLinks">
        <li v-if="topLink">
          <nuxt-link :to="`${topLink.path}`">{{ topLink.title }}</nuxt-link>
        </li>
        <li v-for="link in links" :key="link.title">
          <nuxt-link v-if="dir" :to="`${link.dir}`">{{ link.title }}</nuxt-link>
          <nuxt-link v-else :to="`${link.path}`">{{ link.title }}</nuxt-link>
        </li>
        <li v-if="subLink">
          <nuxt-link :to="`${subLink.path}`">{{ subLink.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <so-me-links class="subNavSomeLinks"></so-me-links>
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
    subLink: {
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
    dir: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      menuOpen: true,
    }
  },
  mounted() {
    document.addEventListener('resize', this.mqResize())
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.handleOutside(e)
    })
  },
  destroyed() {
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.handleOutside(e)
    })
  },
  methods: {
    mqResize() {
      const mql = window.matchMedia('(max-width: 970px)')
      const navLinksContainer = document.querySelector('.subNavLinks')
      if (mql.matches) {
        navLinksContainer.classList.add('hide')
      } else {
        navLinksContainer.classList.remove('hide')
      }
    },
    closeMenu() {
      const subNavSomeLinks = document.querySelector('.subNavSomeLinks')
      const navLinksContainer = document.querySelector('.subNavLinks')
      if (window.innerWidth < 970) {
        subNavSomeLinks.classList.add('hide')
        navLinksContainer.classList.add('hide')
        this.menuOpen = true
      }
    },
    openMenu() {
      const subNavSomeLinks = document.querySelector('.subNavSomeLinks')
      const navLinksContainer = document.querySelector('.subNavLinks')
      if (window.innerWidth < 970) {
        subNavSomeLinks.classList.remove('hide')
        navLinksContainer.classList.remove('hide')
        this.menuOpen = false
      }
    },
    handleOutside(e) {
      const navbar = document.querySelector('.subNav')
      if (window.innerWidth < 970) {
        if (!navbar.contains(e.target)) {
          this.closeMenu()
        }
      }
    },
    toggleMenu() {
      if (this.menuOpen === true) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    },
  },
}
</script>

<style></style>
