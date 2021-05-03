<template>
  <div class="top-price">
    {{ $static.lowest_price.system }}
    <span class="price">
      <span class="unit">
        ¥
      </span>
      {{ $static.lowest_price.price.toLocaleString() }} 〜
    </span>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .top-price {
    .unit {
      font-size: 80%;
    }

    .price {
      font-size: $jump_rate * 1.3;
    }
    display: inline-block;
  }
</style>
