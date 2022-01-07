<template>
  <section>
    <img
      :src="`/images/personer/${content.image}`"
      alt=""
      class="round o"
    />
    <div class="flex column gap-05">
      <p class="">{{ content.name }}</p>
      <p class="">Medlem af Venstres Ungdom</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      default() {},
      type: Object
    }
  }
}
</script>

<style></style>
