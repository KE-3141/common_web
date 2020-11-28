<template>
<div class="index">
  <hero />
</div>
</template>

<script>
import hero from '@/organisms/index/hero.vue'
import instagram from '@/organisms/molecules/atoms/instagram.vue'

export default {
  components: {
    hero,
    instagram,
  }
}
</script>

<style lang='scss'>
  .index {
    width: 100vw;
    height: 100vh;
  }
</style>
