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
    color: $index_top_font_color;
  }
  .main {
    font-size: $index_top_font_size;
    line-height: $index_top_font_size * 2;
  }

  .sub {
    font-size: 12px;
  }
</style>
