<template>
  <div class="subNav">
    <nav class="box">
      <header>
        <h3>{{ title }}</h3>
        <input id="subnav_checkbox" v-model="menuOpen" type="checkbox" />
        <label for="subnav_checkbox" class="navBtn" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
      <ul v-if="menuOpen" class="subNavLinks">
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
    <so-me-links v-if="menuOpen" class="subNavSomeLinks"></so-me-links>
  </div>
</template>

<script>
export default {
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
    window.addEventListener('resize', this.mqResize())
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.subHandleOutside(e)
    })
  },
  unmounted() {
    window.removeEventListener('resize', this.mqResize())
    document.removeEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.subHandleOutside(e)
    })
  },
  methods: {
    mqResize() {
      const mql = window.matchMedia('(max-width: 970px)')
      if (mql.matches) {
        this.menuOpen = false
      } else {
        this.menuOpen = true
      }
    },
    closeMenu() {
      if (window.innerWidth < 970) {
        this.menuOpen = false
      }
    },
    openMenu() {
      if (window.innerWidth < 970) {
        this.menuOpen = true
      }
    },
    subHandleOutside(e) {
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
