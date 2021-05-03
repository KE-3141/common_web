<template>
  <div class="topText">
    <span class="text-box">
      <logo v-if="$static.topText.logo" :is_top="true" />

      <p v-else class="main" data-aos="flip-up" data-aos-duration="500">
        <span class="inline-block" v-for="text in $static.topText.main">
        {{ text }}
        <br>
        </span>
      </p>
      <span class="line" data-aos="flip-left" data-aos-delay="200" />
      <p class="sub" :class="logo_sub" data-aos="flip-up" data-aos-duration="500" data-aos-delay="300">
        <span v-for="text in $static.topText.sub">
        {{ text }}
        <br>
        </span>
      </p>
      <span class="line" data-aos="flip-left" data-aos-delay="200" />
      <top_price v-if="typeof($static.lowest_price) !== 'null'" data-aos="flip-down" data-aos-delay="600"/>
    </span>
  </div>
</template>

<script>
import logo from './logo.vue';
import top_price from './top_price';

export default {
  components: {
    logo,
    top_price,
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
    width: map-get($topText, "width");
    position: absolute;
    text-align: map-get($top, "text-align");
    color: map-get($top, "font-color");
    fill: map-get($top, "font-color");
    stroke: map-get($top, "font-color");
    @extend %centering;
    flex-direction: column;
  }
  .main {
    font-size: map-get($top, "font-size");
    line-height: map-get($top, "font-size") * 2;
    font-weight: bold;
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
    @extend %centering;
    width: 10vw;
    height: 3px;
    margin: 2em 0;
    border-radius: 2px;
    background-color: #000;
  }

  .inline-block {
    display: inline-block;
  }



@include screen-mobile {
  .topText {
    width: 100vw;
    position: relative;
    text-align: center;
  }

  .text-box {
    display: flex;
    padding: 5vh 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .line {
    width: 50vw;
  }


}
</style>
