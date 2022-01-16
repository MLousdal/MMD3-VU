<template>
  <svg-map :map="Denmark" />
</template>

<script>
import { SvgMap } from 'vue-svg-map'
import Denmark from '@svg-maps/denmark'

export default {
  name: 'MyMap',
  components: {
    SvgMap,
  },
  data() {
    return {
      Denmark,
    }
  },
}
</script>
