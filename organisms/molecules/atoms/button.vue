<template>
  <div class="btn">
    <NuxtLink :to="href" v-if="href">{{ label }}</NuxtLink>
    <span @click="changeColor" v-else>{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: '',
    href: null,
    func: null,
  },
  methods: {
    changeColor() {
      this.$emit('changeColor');
    }
  }
}
</script>

<style lang='scss'>
  .btn {
    padding: 0;
    line-height: 10vh;
  }
</style>
