<template>
  <svg-map :map="Danmark" />
</template>

<script>
import { SvgMap } from 'vue-svg-map'
import Danmark from '~/assets/danmark'

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
}
</script>
