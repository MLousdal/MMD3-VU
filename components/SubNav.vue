<template>
  <div class="subNav">
    <nav class="box">
      <header>
        <h3>{{ title }}</h3>
        <input id="subnav_checkbox" type="checkbox" />
        <label for="subnav_checkbox" class="navBtn" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </label>
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
    document.addEventListener('resize', this.mqResize())
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.subHandleOutside(e)
    })
  },
  beforeDestroy() {
    document.removeEventListener('resize', this.mqResize())
    document.removeEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.subHandleOutside(e)
    })
  },
  methods: {
    mqResize() {
      const mql = window.matchMedia('(max-width: 970px)')
      const subNavSomeLinks = document.querySelector('.subNavSomeLinks')
      const navLinksContainer = document.querySelector('.subNavLinks')
      if (mql.matches) {
        subNavSomeLinks.classList.add('hide')
        navLinksContainer.classList.add('hide')
      } else {
        subNavSomeLinks.classList.remove('hide')
        navLinksContainer.classList.remove('hide')
      }
    },
    closeMenu() {
      const subNavSomeLinks = document.querySelector('.subNavSomeLinks')
      const navLinksContainer = document.querySelector('.subNavLinks')
      const subnavCheckbox = document.querySelector('#subnav_checkbox')
      if (window.innerWidth < 970) {
        subNavSomeLinks.classList.add('hide')
        navLinksContainer.classList.add('hide')
        this.menuOpen = true
        subnavCheckbox.checked = false
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
