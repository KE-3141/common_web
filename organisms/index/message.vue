<template>
  <div class="message">
    {{ $static.message }}
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .message {
    width: 100vw;
    height: $index_message_height;
    text-align: $index_message_text_align;
    display: inline;
    vertical-align: middle;
  }
</style>
