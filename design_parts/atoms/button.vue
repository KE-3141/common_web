<template>
  <div class="btn">
    <div v-if="href" @click="push_to">{{ label }}</div>
    <span v-else @click="$emit('button_pushed')">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: '',
    href: null,
  },

  methods: {
    push_to() {
      this.$router.push(this.href);
    }
  }
}
</script>

<style lang='scss' scoped>
  .btn {
    padding: 0;
    line-height: 10vh;
    border-radius: map-get($button, "radius");
    cursor: pointer;

    @extend .button-font;
  }
</style>
