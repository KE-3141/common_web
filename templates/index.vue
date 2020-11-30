<template>
<div class="index">
  <hero />
  <message />
</div>
</template>

<script>
import hero from '@/organisms/index/hero.vue';
import message from '@/organisms/index/message.vue';

export default {
  components: {
    hero,
    message,
  }
}
</script>

<style lang='scss'>
  .index {

  }
</style>
