<template>
  <div class="sns_bar">
    <instagram />
    <twitter />
    <facebook />
  </div>
</template>

<script>
import instagram from '~/design_parts/atoms/instagram.vue';
import twitter from '~/design_parts/atoms/twitter.vue';
import facebook from '~/design_parts/atoms/facebook.vue';

export default {
  components: {
    instagram,
    twitter,
    facebook,
  }
}
</script>

<style lang="scss" scoped>
.instagram {
  margin: map-get($sns, "margin");
  position: relative;
  display: inline-block;
}
.twitter {
  margin-right: map-get($sns, "margin");
  position: relative;
  display: inline-block;
}
.facebook {
  position: relative;
  display: inline-block;
}
</style>
