<template>
  <div v-scroll="handleScroll" class="heading" :class="[scrolled_animation, h_type]">
    <p>
      {{ heading }}
    </p>
  </div>
</template>

<script>
import scroll_trigger from '~/assets/mixins/scroll_trigger.vue';

export default {
  mixins: [scroll_trigger],
  props: {
    heading: String,
    type: String,
  },
  computed: {
    h_type() {
      return {type: true};
    }
  }
};

</script>

<style lang='scss' scoped>
  .heading {
    font-size: $jump_rate;
    letter-spacing: $letter_spacing;
  }
</style>
