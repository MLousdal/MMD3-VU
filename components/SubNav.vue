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
  methods: {
    toggleMenu() {
      const subNavLinks = document.querySelector('.subNavLinks')
      const subNavSomeLinks = document.querySelector('.subNavSomeLinks')

      if (
        subNavLinks.style.display === 'none' ||
        subNavLinks.style.display === ''
      ) {
        subNavLinks.style.display = 'flex'
        subNavSomeLinks.removeAttribute('style', 'display:none !important')
      } else {
        subNavLinks.style.display = 'none'
        subNavSomeLinks.setAttribute('style', 'display:none !important')
      }
    },
  },
}
</script>

<style></style>
