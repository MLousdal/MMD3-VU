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
    let vh = window.innerHeight * 0.01
    window.addEventListener('resize', () => {
      if (window.innerWidth > 970) {
        console.log('desktop: ' + window.innerWidth)
        vh = window.innerHeight * 0.01
      }
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
}
</script>

<style></style>
