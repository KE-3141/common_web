<template>
  <div>
    <commonHeader />
    <nuxt />
    <test_footer/>
  </div>
</template>

<script>
import static_data from "@/assets/mixins/data.vue";
import test from '@/organisms/test/test.vue';
import commonHeader from '@/organisms/header/commonHeader.vue';
import commonFooter from '@/organisms/footer/commonFooter.vue';
import index from '@/templates/index.vue';
import test_footer from '@/organisms/footer/test_footer/test_footer.vue'

export default {
  mixins: [static_data],
  components: {
    commonHeader,
    commonFooter,
    test,
    test_footer,
  },

  mounted(){
    console.log(this.$static);
  }
}
</script>

<style lang="scss">

</style>
