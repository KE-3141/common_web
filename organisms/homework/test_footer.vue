<template>
  <div>
    <footer>
      <p :class='{clicked: isClicked}' :changeColor="isClicked">twitter</p>
      <p :class='{clicked: isClicked}' :changeColor="isClicked">facebook</p>
      <p :class='{clicked: isClicked}' :changeColor="isClicked">instagram</p>
      <btn  @click="changeColor">ここをクリック</btn>
    </footer>
  </div>
</template>

<script>
import btn from '@/organisms/molecules/atoms/button.vue'

export default {
  deta() {
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