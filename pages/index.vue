<template>
  <div>
    <home-hero></home-hero>
    <home-video></home-video>
    <home-social></home-social>
    <home-map></home-map>
    <home-testimonials :testimonials="testimonials"></home-testimonials>
    <home-follow></home-follow>
    <home-tilmeld></home-tilmeld>
  </div>
</template>

<script>
import HomeFollow from '~/components/HomeFollow.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeMap from '~/components/HomeMap.vue'
import HomeSocial from '~/components/HomeSocial.vue'
import HomeTestimonials from '~/components/HomeTestimonials.vue'
import HomeVideo from '~/components/HomeVideo.vue'
export default {
  name: 'IndexPage',
  components: {
    HomeHero,
    HomeVideo,
    HomeMap,
    HomeSocial,
    HomeTestimonials,
    HomeFollow,
  },
  async asyncData({ $content }) {
    const testimonials = await $content('testimonials').fetch()
    return {
      testimonials,
    }
  },
}
</script>
