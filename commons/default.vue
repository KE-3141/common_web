<template>
  <div>
    <commonHeader />
    <nuxt />
    <commonFooter />
  </div>
</template>

<script>
import static_data from "@/assets/mixins/data.vue";
import commonHeader from '@/organisms/header/commonHeader.vue';
import commonFooter from '@/organisms/footer/commonFooter.vue';
import index from '@/templates/index.vue';

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
