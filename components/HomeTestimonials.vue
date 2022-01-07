<template>
  <section class="home-testimonials overlay">
    <div class="wrapper">
      <h2>Hvad siger vores medlemmer?</h2>
      <div class="arrows">
        <input
          type="image"
          src="/icons/Left-Arrow.svg"
          alt="menu"
          class="icon l filter-font-color"
          @click="decreaseX"
        />
        <article>
          <nuxt-content
            :document="testimonials[x]"
            class="xlarge-text"
          ></nuxt-content>
          <testimonial-avatar :content="testimonials[x]"></testimonial-avatar>
        </article>
        <input
          type="image"
          src="/icons/Right-Arrow.svg"
          alt="menu"
          class="icon filter-font-color l"
          @click="increaseX"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {
      x: 0,
    }
  },
  mounted() {
    setInterval(this.increaseX, 10000)
  },
  destroyed() {
    clearInterval(this.increaseX)
  },
  methods: {
    increaseX() {
      if (this.x < this.testimonials.length - 1) {
        this.x++
      } else {
        this.x = 0
      }
    },
    decreaseX() {
      if (this.x > 0) {
        this.x--
      } else {
        this.x = this.testimonials.length - 1
      }
    },
  },
}
</script>

<style></style>
