<template>
  <section class="home-map">
    <div class="wrapper content">
      <article>
        <h2>
          Find en lokalforening i nærheden af dig og læs mere om vores lokale
          arrangementer
        </h2>
        <p>
          VU er repræsenteret via lokalforeninger i hele landet, og du er kun få
          klik fra at finde kontaktinformationen på en lokalforening i nærheden
          af dig - nedenfor kan du finde din lokalforening eller kontakte os for
          generelle spørgsmål.
        </p>
        <div class="flex row gap-1">
          <nuxt-link to="/kontakt/kontakt-os" class="btn primary grow l"
            >Kontakt os</nuxt-link
          >
          <nuxt-link to="/lokalforeninger" class="btn secondary grow l"
            >Find lokalforening</nuxt-link
          >
        </div>
      </article>
      <nuxt-link to="/lokalforeninger" class="map" aria-label="lokalforeninger">
        <nuxt-picture src="/images/map.png" alt=""></nuxt-picture>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
