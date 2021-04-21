<template>
  <div class="heading" :class="[h_type]">
    <p>
      <span class="text-chunk" v-for="chunk in heading">
        {{ chunk }}
      </span>
    </p>
  </div>
</template>

<script>

export default {
  props: {
    heading: Array,
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

  .text-chunk {
    display: inline-block;
  }
</style>
