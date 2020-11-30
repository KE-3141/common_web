<template>
  <div class="hero">
    <heroContents />
    <topText />
  </div>
</template>

<script>
import heroContents from './parts/heroContents.vue';
import topText from './parts/topText.vue';

export default {
  components: {
    heroContents,
    topText,
  }

}
</script>
<style lang="scss">
  .hero {
    position: static;
  }
  .heroContents {
    position: relative;
  }

</style>
