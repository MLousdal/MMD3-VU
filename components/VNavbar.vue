<template>
  <nav class="box top">
    <div class="navContainer">
      <nuxt-link
        to="/"
        class="logo"
        aria-label="home"
        @click.native="closeMenu"
      >
        <div class="logo-bg">
          <img src="~/assets/icons/vu-logo.svg" alt="" />
        </div>
        <span class="bold xlarge-text capitalize">Venstres Ungdom</span>
      </nuxt-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <nuxt-link
              to="/det-mener-vi"
              class="underline"
              @click.native="closeMenu"
              >Det mener vi</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/lokalforeninger"
              class="underline"
              @click.native="closeMenu"
              >Lokalforeninger</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/arrangementer"
              class="underline"
              @click.native="closeMenu"
              >Arrangementer</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/om-vu/omvu"
              class="underline"
              @click.native="closeMenu"
              >Om VU</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/kontakt/kontakt-os"
              class="underline"
              @click.native="closeMenu"
              >Kontakt os</nuxt-link
            >
          </li>
          <li>
            <a
              class="btn secondary grow l cta"
              href="https://vu.membersite.dk/Membership/BuyMembership"
              target="_blank"
              rel="noopener"
            >
              Bliv medlem
            </a>
          </li>
        </ul>
      </div>
    </div>
    <input
      type="image"
      src="/icons/mdi_menu.svg"
      alt="menu"
      class="icon filter-primary navBtn"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
export default {
  name: 'VNavbar',
  data() {
    return {
      menuOpen: true,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrolledEffect)
    mqResize()
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.handleOutside(e)
    })
    function mqResize() {
      const mql = window.matchMedia('(max-width: 970px)')
      if (mql.matches) {
        const navLinksContainer = document.querySelector('.navLinksContainer')
        navLinksContainer.classList.add('hide')
      }
    }
  },
  destroyed() {
    document.removeEventListener('scroll', this.scrolledEffect)
    document.removeEventListener('mouseup', (e) => {
      this.handleOutside(e)
    })
  },
  methods: {
    closeMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (window.innerWidth < 970) {
        navLinksContainer.classList.add('hide')
        this.menuOpen = true
      }
    },
    openMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (window.innerWidth < 970) {
        navLinksContainer.classList.remove('hide')
        this.menuOpen = false
      }
    },
    handleOutside(e) {
      const navbar = document.querySelector('.top')
      if (window.innerWidth < 970) {
        if (!navbar.contains(e.target)) {
          this.closeMenu()
        }
      }
    },
    toggleMenu() {
      if (this.menuOpen === true) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    },
    scrolledEffect() {
      if (window.scrollY > 0) {
        if (!this.$el.classList.contains('scrolled')) {
          this.$el.classList.add('scrolled', 'shadow', 's')
        }
      } else {
        this.$el.classList.remove('scrolled', 'shadow', 's')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0;
  }
}
</style>
