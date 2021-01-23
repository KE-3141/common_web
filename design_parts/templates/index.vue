<template>
<div class="index">
  <hero />
  <message />
</div>
</template>

<script>
import hero from '../organisms/hero.vue';
import message from '../atoms/message.vue';

export default {
  components: {
    hero,
    message,
  }
}
</script>

<style lang='scss'>
  .index {
    width: 100vw;
    min-height: 100vh;
  }
</style>
