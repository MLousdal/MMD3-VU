<template>
  <section class="home-video">
    <div class="wrapper content">
      <article>
        <h2>Lad os fortælle dig mere om Venstres Ungdom!</h2>
        <p>
          Venstres Ungdom er for dig, der ønsker at blive klogere på politik og
          opbygge et stærkt liberalt netværk - VU er for dig, der gerne vil lære
          mere om politik og samfundet samtidig med, at du møder andre unge med
          samme interesse som dig.
        </p>
        <nuxt-link to="/om-vu" class="btn primary grow l"
          >Læs mere om VU</nuxt-link
        >
      </article>
      <sub-video :video-url="videoUrl"></sub-video>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 's4aTjmjnGoc',
    }
  },
}
</script>

<style></style>
