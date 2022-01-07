<template>
  <div class="subCard">
    <nuxt-picture
      v-if="cardType === 'default' || cardType === 'event'"
      :src="`/images/${content.img}`"
      quality="30"
      alt=""
    ></nuxt-picture>
    <nuxt-picture
      v-if="cardType === 'contact'"
      :src="`/images/personer/${content.img}`"
      quality="30"
      alt=""
    ></nuxt-picture>
    <div class="box">
      <h4 v-if="cardType === 'default' || cardType === 'event'">
        {{ content.title }}
      </h4>
      <h4 v-if="cardType === 'contact'">{{ content.rolle }}</h4>
      <h4 v-if="cardType === 'region'">{{ content }}</h4>
      <p v-if="cardType === 'contact'">
        {{ content.name }}<br />
        {{ content.number }}<br />
        {{ content.email }}
      </p>
      <p v-if="cardType === 'event'">
        {{ content.date }}<br />
        {{ content.loc }}
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
  },
}
</script>

<style></style>
