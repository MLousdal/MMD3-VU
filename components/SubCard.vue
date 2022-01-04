<template>
  <div class="subCard">
    <!-- <nuxt-img :src="`/images/${content.img}`"></nuxt-img> -->
    <nuxt-picture src="/images/kultur.jpg"></nuxt-picture>
    <div class="box">
      <h4>{{ content }}</h4>
      <p v-if="cardType === 'contact'">
        {{ contact.name }}<br />
        {{ contact.number }}<br />
        {{ contact.email }}
      </p>
      <p v-if="cardType === 'event'">
        {{ event.date }}<br />
        {{ event.loc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardType: {
      default() {},
      type: Object,
    },
    content: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
