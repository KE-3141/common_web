<template>
<div class="index">
  <hero id="#HOME"/>
  <concept_messages　id="ABOUT" />
</div>
</template>

<script>
import hero from '../organisms/hero';
import concept_messages from '../molecules/concept_messages.vue'

export default {
  components: {
    hero,
    concept_messages,
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
