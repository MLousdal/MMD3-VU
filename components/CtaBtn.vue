<template>
  <a
    class="btn secondary grow"
    :class="[{ s: size == 's' }, { l: size == 'l' }]"
    href="https://vu.membersite.dk/Membership/BuyMembership"
    target="_blank"
    rel="noopener"
  >
    Bliv medlem
  </a>
</template>

<script>
export default {
  name: 'CtaBtn',
  props: {
    size: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
