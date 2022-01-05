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
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    
    window.addEventListener('resize', () => {
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    })
  },
}
</script>

<style></style>
