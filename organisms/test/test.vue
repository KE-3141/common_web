<template>
  <div class="test">
    <header>
      <logo />
      <nav v-for="nav in $static.navs" :nav='nav'/>
    </header>
  </div>
</template>

<script>
import logo from '@/organisms/test/parts/logo.vue'
import nav from '@/organisms/test/parts/nav.vue'

export default{
  components: {
    logo,
    nav,
  }
}
</script>

<style lang="scss">
  .test {
    width: 100vw;
    height: $test_height;
    background-color: $test_background-color;
  }
</style>
