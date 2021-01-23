<template>
  <div class="footer">
    <snsBar />
  </div>
</template>

<script>
import snsBar from '~/design_parts/molecules/snsBar.vue';

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
    background-color: map-get($footer, "background-color");
    color: map-get($footer, "font-color");
  }
</style>
