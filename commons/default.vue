<template>
  <div class="gate">
    <commonHeader />
    <nuxt />
  </div>
</template>

<script>
import static_data from "../assets/mixins/data.vue";
import commonHeader from '../design_parts/molecules/header.vue';
import commonFooter from '../design_parts/molecules/footer.vue';
import index from '../design_parts/templates/index.vue';

export default {
  mixins: [static_data],
  components: {
    commonHeader,
    commonFooter,
  },
}
</script>

<style lang="scss">
</style>
