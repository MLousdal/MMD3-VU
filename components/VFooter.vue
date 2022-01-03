<template>
  <footer>
    <div class="footer-grid">
      <div>
        <h4>Find rundt på siden</h4>
        <ul>
          <li>
            <nuxt-link to="/det-mener-vi">Det mener vi</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/lokalforeninger">Find din Lokalforening</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/arrangementer">Arrangementer</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/om-vu">Om VU</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h4>For medlemmer</h4>
        <ul>
          <li>
            <a href="#">Tilmeld PBS</a>
          </li>
          <li>
            <a href="#">Membersite</a>
          </li>
          <li>
            <a href="#">Refusion</a>
          </li>
          <li>
            <a href="#">Indberetning</a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Kontakt os</h4>
        <address>
          <a href="mailto:webmaster@example.com">kontakt@vu.dk</a><br />
          Nørre Voldgade 82, 3.-4. sal,<br />
          1358 København K<br />
          <a href="tel:+4512345678">+45 7023 5151</a>
        </address>
      </div>
      <div>
        <h4>Følg os online</h4>
        <p>Hold kontakten med os via vores sociale medier!</p>
        <so-me-links size="s" inverse></so-me-links>
      </div>
    </div>
    <hr />
    <nav class="footer">
      <ul>
        <li>
          <a href="#">Om webstedet</a>
        </li>
        <li>
          <a href="#">handelsbetingelser</a>
        </li>
        <li>
          <a href="#">Membersite</a>
        </li>
      </ul>
      <p>© 2022 Venstres Ungdom</p>
    </nav>
  </footer>
</template>

<script>
import SoMeLinks from './SoMeLinks.vue'
export default {
  components: { SoMeLinks },
}
</script>

<style></style>
