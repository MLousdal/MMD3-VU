<template>
  <iframe
    width="560"
    height="315"
    :src="`https://www.youtube-nocookie.com/embed/${videoUrl}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    videoUrl: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
