<template>
<div class="index">
  <hero />
  <message :location="'index'" :index="0"/>
  <concept />
  <topMenu />
  <location />
</div>
</template>

<script>
import hero from '../organisms/hero.vue';
import message from '../molecules/message.vue';
import concept from '../original/concept.vue';
import topMenu from '../original/top_menu.vue';
import location from '../original/location.vue';

export default {
  components: {
    hero,
    message,
    concept,
    topMenu,
    location,
  }
}
</script>

<style lang='scss'>
  .index {
    width: 100vw;
    min-height: 100vh;
    color: map-get($index, "font-color");
    font-size: map-get($index, "font-size");
  }
</style>
