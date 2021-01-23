<template>
  <div class="message">
    <p>
      {{ $static.message }}
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .message {
    width: 100vw;
    height: map-get(map-get($index, "message"), "height");
    text-align: map-get(map-get($index, "message"), "text-align");
  }
</style>
