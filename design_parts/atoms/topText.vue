<template>
  <div class="topText">
      <logo v-if="$static.topText.logo" :is_top="true" />

      <p v-else class="main">
        {{ $static.topText.main }}
      </p>

      <p class="sub" :class="logo_sub">
        {{ $static.topText.sub }}
      </p>
  </div>
</template>

<script>
import logo from './logo.vue';

export default {
  components: {
    logo,
  },
  computed: {
    logo_sub() {
      return {
        logo_sub: this.$static.topText.logo,
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  .topText {
    width: 50vw;
    height: 50vh;
    margin: 25vh 25vw;
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: map-get($top, "font-color");
    fill: map-get($top, "font-color");
    stroke: map-get($top, "font-color");
  }
  .main {
    font-size: map-get($top, "font-size");
    line-height: map-get($top, "font-size") * 2;
  }

  .sub {
    font-size: map-get($top, "font-size") / 2;
    letter-spacing: $letter_spacing;
  }

  .logo_sub {
    transform: translateY(map-get($top, "height"));
  }

  .logo {
    margin-left: 0;
    display: inline-block;
    text-align: center;
    line-height: 1em;
    position: absolute;
    fill: map-get($top, "font-color");
    z-index: 8000;
  }
</style>
