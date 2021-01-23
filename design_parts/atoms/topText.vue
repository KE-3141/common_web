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
    color: map-get(map-get($index, "top"), "font-color");
  }
  .main {
    font-size: map-get(map-get($index, "top"), "font-size");
    line-height: map-get(map-get($index, "top"), "font-size") * 2;
  }

  .sub {
    font-size: 12px;
  }
</style>
