<template>
  <div>
    <header class="home-hero overlay">
      <div class="wrapper">
        <h1>
          Kickstart din politiske karriere<br />
          med et stærkt liberalt netværk!
        </h1>
        <p>
          Venstres Ungdom hjælper dig med at opbygge et nationalt netværk med
          ligesindede unge, der brænder for at lære mere om politik.
        </p>
        <div class="flex row gap-1">
          <nuxt-link to="/kontakt/kontakt-os" class="btn contrast grow l"
            >Kontakt os</nuxt-link
          >
          <nuxt-link to="/om-vu/omvu" class="btn secondary outline grow l"
            >Læs mere om VU</nuxt-link
          >
        </div>
        <so-me-links size="m"></so-me-links>
      </div>
    </header>
    <section class="home-video">
      <div class="wrapper content">
        <article>
          <h2>Lad os fortælle dig mere om Venstres Ungdom!</h2>
          <p>
            Venstres Ungdom er for dig, der ønsker at blive klogere på politik
            og opbygge et stærkt liberalt netværk - VU er for dig, der gerne vil
            lære mere om politik og samfundet samtidig med, at du møder andre
            unge med samme interesse som dig.
          </p>
          <nuxt-link to="/om-vu/omvu" class="btn primary grow l"
            >Læs mere om VU</nuxt-link
          >
        </article>
        <sub-video :video-url="videoUrl"></sub-video>
      </div>
    </section>
    <section class="home-social flex center column gap-1">
      <h2>Hold kontakten med os online</h2>
      <so-me-links size="l"></so-me-links>
    </section>
    <section class="home-map">
      <div class="wrapper content">
        <article>
          <h2>
            Find en lokalforening i nærheden af dig og læs mere om vores lokale
            arrangementer
          </h2>
          <p>
            VU er repræsenteret via lokalforeninger i hele landet, og du er kun
            få klik fra at finde kontaktinformationen på en lokalforening i
            nærheden af dig - nedenfor kan du finde din lokalforening eller
            kontakte os for generelle spørgsmål.
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
        <nuxt-link
          to="/lokalforeninger"
          class="map"
          aria-label="lokalforeninger"
        >
          <nuxt-picture src="/images/map.png" alt=""></nuxt-picture>
        </nuxt-link>
      </div>
    </section>
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
    <section class="home-follow">
      <div class="wrapper">
        <header>
          <h2>Følg med i VU</h2>
          <p>
            Har du ledt efter en måde at følge med i VU på? Nedenfor har vi
            samlet alt, hvad der bliver produceret og offentliggjort af Venstres
            Ungdom - alt lige fra vores sociale medier til nyheder til
            blogopslag, der er skrevet via vores medlemmer.
          </p>
        </header>
        <section class="follow-grid">
          <a
            href="https://www.facebook.com/VenstresUngdom/"
            target="_blank"
            rel="noopener"
            class="facebook overlay"
          >
            <h3>Facebook</h3>
            <p>
              Har du lyst til at følge VU på Facebook sammen med 20.000 andre
              ligesindede?
            </p>
          </a>
          <a href="" target="_blank" rel="noopener" class="debat overlay">
            <h3>Debatindlæg</h3>
            <p>
              Her kan du læse debatindlæg fra tidligere og nuværende medlemmer
            </p>
          </a>
          <a
            href="https://www.instagram.com/venstres_ungdom/?hl=en"
            target="_blank"
            rel="noopener"
            class="instagram overlay"
          >
            <h3>Instagram</h3>
            <p>
              Her kan du se de seneste billeder fra vores spændende
              arrangementer
            </p>
          </a>
          <a
            href="https://twitter.com/search?q=%23venstresungdom"
            target="_blank"
            rel="noopener"
            class="twitter overlay"
          >
            <h3>Twitter</h3>
            <p>
              Vi er meget aktive på Twitter, hvor du kan følge vores daglige
              gang
            </p>
          </a>
          <a href="" target="_blank" rel="noopener" class="nyheder overlay">
            <h3>Nyheder</h3>
            <p>Læs seneste nyheder fra Venstres Ungdom</p>
          </a>
        </section>
      </div>
    </section>
    <section class="wrapper home-tilmeld">
      <h2>Bliv en del af Venstres Ungdom</h2>
      <p>
        Bliv en del af Danmarks største, stærkeste og fedeste ungdomspolitiske
        forening, der kæmper for et bedre og mere liberalt Danmark med lavere
        skat og mere frihed.
      </p>
      <div class="flex row gap-1">
        <nuxt-link to="/kontakt/kontakt-os" class="btn contrast grow l"
          >Kontakt os</nuxt-link
        >
        <nuxt-link to="/kontakt/kontakt-os" class="btn secondary grow l"
          >Find lokalforening</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const testimonials = await $content('testimonials').fetch()
    return {
      testimonials,
    }
  },
  data() {
    return {
      x: 0,
      videoUrl: 's4aTjmjnGoc',
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
