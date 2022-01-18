<template>
  <svg-map :map="Danmark" @click="clickLocation" />
</template>

<script>
import { SvgMap } from 'vue-svg-map'
import Danmark from '~/assets/danmark'

const URL = {
  midtjylland: '/lokalforeninger/midt-vestjylland',
  østjylland: '/lokalforeninger/østjylland',
  nordjylland: '/lokalforeninger/nordjylland',
  sydjylland: '/lokalforeninger/syd-sønderjylland',
  fyn: '/lokalforeninger/fyn',
  hovedstaden: '/lokalforeninger/hovedstaden',
  nordsjælland: '/lokalforeninger/nordsjælland',
  bornholm: '/lokalforeninger/hovedstaden/bornholm',
  sjælland: '/lokalforeninger/sjælland',
}

export default {
  name: 'MyMap',
  components: {
    SvgMap,
  },
  data() {
    return {
      Danmark,
    }
  },
  methods: {
    clickLocation(event) {
      this.$router.push(URL[event.target.id])
    },
  },
}
</script>