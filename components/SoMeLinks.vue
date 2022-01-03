<template>
  <div
    class="some-links flex row"
    :class="[{ 'gap-1': size === 'm' || 's' }, { 'gap': size == 'l' }]"
  >
    <a
      href="https://www.facebook.com/VenstresUngdom/"
      class="icon grow"
      :class="[{ s: size == 's' }, { m: size == 'm' }, { l: size == 'l' }, {inverse: inverse === true}]"
      target="_blank"
      rel="noopener"
      ><img src="~/assets/icons/social/facebook.svg" alt="facebook"
    /></a>
    <a
      href="https://www.instagram.com/venstres_ungdom/?hl=en"
      class="icon grow"
      :class="[{ s: size == 's' }, { m: size == 'm' }, { l: size == 'l' }, {inverse: inverse === true}]"
      target="_blank"
      rel="noopener"
      ><img src="~/assets/icons/social/instagram.svg" alt="instagram"
    /></a>
    <a
      href="https://twitter.com/search?q=%23venstresungdom"
      class="icon grow"
      :class="[{ s: size == 's' }, { m: size == 'm' }, { l: size == 'l' }, {inverse: inverse === true}]"
      target="_blank"
      rel="noopener"
      ><img src="~/assets/icons/social/twitter.svg" alt="twitter"
    /></a>
    <a
      href="https://www.youtube.com/channel/UCjgTnWyUK6ZZs-c8FVaMW4A"
      class="icon grow"
      :class="[{ s: size == 's' }, { m: size == 'm' }, { l: size == 'l' }, {inverse: inverse === true}]"
      target="_blank"
      rel="noopener"
      ><img src="~/assets/icons/social/youtube.svg" alt="youtube"
    /></a>
  </div>
</template>

<script>
export default {
  name: 'SoMeLinks',
  props: {
    size: {
      default: 'm',
      type: String,
    },
    inverse: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style></style>
