<template>
<div class="index">
  <hero id="HOME"/>
  <concept_messages　id="ABOUT" />
  <plans id="PACKS" />
  <single_menus />
  <contact  id="CONTACT" />
</div>
</template>

<script>
import hero from '../organisms/hero';
import concept_messages from '../molecules/concept_messages.vue'
import plans from '../molecules/plans.vue';
import single_menus from '../organisms/single_menus';
import contact from '../molecules/contact';

export default {
  components: {
    hero,
    concept_messages,
    plans,
    single_menus,
    contact,
  }
}
</script>

<style lang="scss" scoped>
  .index {
    width: 100vw;
    min-height: 100vh;
    color: map-get($index, "font-color");
    font-size: map-get($index, "font-size");
    overflow: hidden;
  }
</style>
