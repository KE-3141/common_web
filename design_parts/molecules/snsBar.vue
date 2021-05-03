<template>
  <div class="sns_bar">
    <instagram v-if="$static.instagram.href !== '' " />
    <twitter v-if="$static.twitter.href !== '' " />
    <facebook v-if="$static.facebook.href !== '' " />
    <LINE_app v-if="$static.LINE_app.href !== '' " />
  </div>
</template>

<script>
import instagram from '~/design_parts/atoms/instagram.vue';
import twitter from '~/design_parts/atoms/twitter.vue';
import facebook from '~/design_parts/atoms/facebook.vue';
import LINE_app from '~/design_parts/atoms/LINE_app.vue';

export default {
  components: {
    instagram,
    twitter,
    facebook,
    LINE_app,
  }
}
</script>

<style lang="scss" scoped>
.sns_bar {
  @extend %centering;
}
.instagram {
  margin: 0 map-get($sns, "margin");
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.twitter {
  margin-right: 0 map-get($sns, "margin");
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.facebook {
  margin-right: 0 map-get($sns, "margin");
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.LINE_app {
  margin-right: 0 map-get($sns, "margin");
  position: relative;
  display: inline-block;
  cursor: pointer;
}
</style>
