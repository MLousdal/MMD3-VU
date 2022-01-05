<template>
  <div>
    <v-navbar></v-navbar>
    <nuxt></nuxt>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
}
</script>

<style></style>
