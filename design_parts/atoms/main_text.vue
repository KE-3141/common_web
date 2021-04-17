<template>
  <div class="main_text" v-scroll="handleScroll" :class="scrolled_animation">
    {{ main_text }}
  </div>
</template>

<script>
import scroll_trigger from '~/assets/mixins/scroll_trigger.vue';

  export default {
    mixins: [scroll_trigger],
    props: {
      main_text: String,
    },
  };
</script>

<style lang="scss">
  .main_text {
    white-space:pre-line;
  }
</style>
