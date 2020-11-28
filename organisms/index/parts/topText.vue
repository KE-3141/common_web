<template>
  <div class="topText">
    <div>
      <p class="main">
        {{ $static.topText.main }}
      </p>
      <p class="sub">
        {{ $static.topText.sub }}
      </p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
  .topText {
    width: 50vw;
    height: 50vh;
    margin: 25vh 25vw;
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $index_text_color;
  }
  .main {
    font-size: $hero_font_size;
    line-height: $hero_font_size * 2;
  }

  .sub {
    font-size: 12px;
  }
</style>
