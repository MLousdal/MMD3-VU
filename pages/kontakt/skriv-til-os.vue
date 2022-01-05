<template>
  <div class="article nav-offset wrapper">
    <main class="">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" class="offset-bottom"></nuxt-content>
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/mqknawzw"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label for="full-name"
            >Dit navn:
            <input
              id="full-name"
              type="text"
              name="name"
              placeholder="Dit navn (skal udfyldes)"
              required=""
              class="input"
            />
          </label>
          <label for="email-address"
            >Din email:
            <input
              id="email-address"
              type="email"
              name="_replyto"
              placeholder="Din email (skal udfyldes)"
              required=""
            />
          </label>
          <label for="subject"
            >Emne:
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Emne (skal udfyldes)"
              required=""
              class="input"
            />
          </label>
          <label for="message"
            >Besked:
            <textarea
              id="message"
              rows="5"
              name="message"
              placeholder="Skriv beskeden her.."
            ></textarea>
          </label>
          <button type="submit" class="secondary l wide flex center">Send Besked</button>
        </fieldset>
      </form>
    </main>
    <sub-nav title="Oversigt" :links="links"></sub-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('kontakt/skriv-til-os').fetch()
    const links = await $content('kontakt')
      .only(['title', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return {
      article,
      links,
    }
  },
}
</script>

<style></style>
