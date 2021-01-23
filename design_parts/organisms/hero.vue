<template>
  <div class="hero">
    <heroContents />
    <topText />
  </div>
</template>

<script>
import heroContents from '~/design_parts/atoms/heroContents.vue';
import topText from '~/design_parts/atoms/topText.vue';

export default {
  components: {
    heroContents,
    topText,
  }

}
</script>
<style lang="scss">
  .hero {
    width: 100vw;
    height: 100vh;
  }
  .heroContents {
    position: relative;
  }

</style>
