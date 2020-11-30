<template>
  <div>
    <footer>
      <p :class='{clicked: isClicked}'>twitter</p>
      <p :class='{clicked: isClicked}'>facebook</p>
      <p :class='{clicked: isClicked}'>instagram</p>
      <btn :label="'ここクリック'" @click="changeColor"></btn>
    </footer>
  </div>
</template>

<script>
import btn from '@/organisms/molecules/atoms/button.vue'

export default {
  components: {
    btn,
  },
  data() {
    return {
      isClicked: false
    }
  },
  methods: {
    changeColor() {
      this.isClicked = !this.isClicked;
    }
  },
}
</script>

<style lang="scss">
 .clicked {
   color: #ff444f;
 }

</style>