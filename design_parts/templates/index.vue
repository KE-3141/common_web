<template>
<div class="index">
  <hero id="#HOME"/>
  <concept_message />
</div>
</template>

<script>
import hero from '../organisms/hero';
import concept_message from '../molecules/concept_message.vue'

export default {
  components: {
    hero,
    concept_message,
  }
}
</script>

<style
    Concept_imagelang='scss'>
  .index {
    width: 100vw;
    min-height: 100vh;
    color: map-get($index, "font-color");
    font-size: map-get($index, "font-size");
  }
</style>
