<template>
  <nav>
    <h3>Ordfører områder</h3>
    <ul>
      <li v-for="omraade in ordforerOmraader" :key="omraade">
        <nuxt-link :to="`det-mener-vi/ordfører-områder/${omraade}`"></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>