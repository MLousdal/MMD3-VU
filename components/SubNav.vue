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
          <nuxt-link :to="`${link.path}`">{{ link.title }}</nuxt-link>
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
    links: {
      default() {},
      type: Array,
    },
    title: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  mounted() {
    document.addEventListener('mouseup', function (e) {
      if (window.innerWidth < 970) {
        const container = document.querySelector('.subNavLinks')
        if (!container.contains(e.target)) {
          container.style.display = 'none'
        }
      }
    })
  },
  destroyed() {
    document.removeEventListener('mouseup', function (e) {
      if (window.innerWidth < 970) {
        const container = document.querySelector('.subNavLinks')
        const navBtn = document.querySelector('.navBtn')
        if (!container.contains(e.target || navBtn)) {
          container.style.display = 'none'
        }
      }
    })
  },
  methods: {
    toggleMenu() {
      const navLinksContainer = document.querySelector('.subNavLinks')
      const subNavSomeLinks = document.querySelector('.subNavSomeLinks')
      if (this.menuOpen === false) {
        navLinksContainer.style.display = 'flex'
        subNavSomeLinks.style.display = 'flex'
        this.menuOpen = true
      } else {
        navLinksContainer.style.display = 'none'
        subNavSomeLinks.style.display = 'none'
        this.menuOpen = false
      }
    },
  },
}
</script>

<style></style>
