<template>
<div>
  <button @click="tapContext">
    <font-awesome-icon v-if="!is_opened" icon="bars" />
    <font-awesome-icon v-if="is_opened" icon="times" />
  </button>
</div>
</template>

<script>
export default {
  props: {
    is_opened: Boolean,
  },
  methods: {
    tapContext() {
      this.$emit('tapContext');
    }
  }

}
</script>

<style lang="scss">
button {
    font-size: 2.5vh;
    margin: 3.625vh;
    right: 0;
    position: absolute;
    color: $header_font_color;
    z-index: 9000;
}
</style>
