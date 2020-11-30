<template>
  <div class="footer">
    <snsBar />
  </div>
</template>

<script>
import snsBar from '@/organisms/molecules/snsBar.vue';

export default {
  components: {
    snsBar,
  }
}
</script>

<style lang="scss">
  .footer {
    width: 100vw;
    height: 20vh;
    background-color: $footer_background_color;
    color: $footer_font_color;
  }
</style>
