<template>
  <div>
    <commonHeader />
    <nuxt />
    <commonFooter />
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

  mounted(){
    console.log(this.$static);
  }
}
</script>

<style lang="scss">

</style>
