<template>
  <div class="topText">
      <logo v-if="$static.topText.logo" :is_top="true" />

      <p v-else class="main">
        <span v-for="text in $static.topText.main">
        {{ text }}
        <br>
        </span>
      </p>
      <span class="line" />
      <p class="sub" :class="logo_sub">
        <span v-for="text in $static.topText.sub">
        {{ text }}
        <br>
        </span>
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
    width: map-get($topText, "width") - 10vw;
    position: absolute;
    text-align: map-get($top, "text-align");
    color: map-get($top, "font-color");
    fill: map-get($top, "font-color");
    stroke: map-get($top, "font-color");
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
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

  .line {
    width: 10vw;
    height: 3px;
    margin: 2em 0;
    border-radius: 2px;
    background-color: #000;
  }
</style>
