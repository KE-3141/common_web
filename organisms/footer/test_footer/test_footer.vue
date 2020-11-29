<template>
 <footer>
  <info v-for="info in $static.infos" :info='info' :key='info.label' :class="{clicked: is_clicked}">
  </info>
  <btn @click="changeColor" :label='$static.buttons[0].label'></btn>
 </footer>
</template>

<script>
  import info from '@/organisms/footer/test_footer/test_footer_link.vue'
  import btn from '@/organisms/molecules/atoms/button.vue'
  
  export default{
   components: {
     info,
     btn,
   },
   data() {
     return {
       is_clicked: false
     }
   },
  methods: {
    changeColor() {
     this.is_clicked = !this.is_clicked;
     console.log(this.is_clicked);
   },
  },
  }

</script>

<style lang="scss>
 .footer {
   width: 100vh;
   height: $footer-height;
   background-color: $footer-background-color;
 }
 .clicked {
   color: #ddd;
 }
</style>
