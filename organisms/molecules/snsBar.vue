<template>
  <div class="sns_bar">
    <instagram />
    <twitter />
    <facebook />
  </div>
</template>

<script>
import instagram from '@/organisms/molecules/atoms/instagram.vue';
import twitter from '@/organisms/molecules/atoms/twitter.vue';
import facebook from '@/organisms/molecules/atoms/facebook.vue';

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
  margin: $sns_margin;
  position: relative;
  display: inline-block;
}
.twitter {
  margin-right: $sns_margin;
  position: relative;
  display: inline-block;
}
.facebook {
  position: relative;
  display: inline-block;
}
</style>
