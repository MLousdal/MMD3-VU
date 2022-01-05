<template>
  <div class="subCard">
    <nuxt-picture
      v-if="cardType === 'default'"
      :src="`/images/${content.img}`"
      quality="30"
    ></nuxt-picture>
    <nuxt-picture
      v-if="cardType === 'contact'"
      :src="`/images/${contact.img}`"
      quality="30"
    ></nuxt-picture>
    <div class="box">
      <h4 v-if="cardType === 'default'">{{ content.title }}</h4>
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
      default: 'default',
      type: String,
    },
    content: {
      default() {},
      type: Object,
    },
    contact: {
      default() {},
      type: Object,
    },
    event: {
      default() {},
      type: Object,
    },
  },
}
</script>

<style></style>
