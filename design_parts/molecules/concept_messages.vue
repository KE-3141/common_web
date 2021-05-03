<template>
  <div class="concept_messages">
    <div class="concept_message" v-for="message in $static.messages">
      <message_left :message="message" />
      <div class="content-area" data-aos="fade-up-left">
        <svg_element class="svg" :name="message.content" />
      </div>
  </div>
</div>
</template>

<script>
import svg_element from '../atoms/svg_element';
import message_left from '../atoms/message_left';

export default {
  components: {
    svg_element,
    message_left,
  },
  }
</script>

<style lang="scss" scoped>
  .concept_message {
    display: flex;
    text-align: left;
    min-height: 100vh;
  }

  .content-area {
    width: 50vw;
    height: 100vh;
    @extend %centering
  }

  .svg {
    width: 50%;
    height: 50%;
  }

  @include screen-mobile {
      .concept_message {
        height: 100vh;
        position: relative;
        flex-direction: column-reverse;
      }
      .text {
        height: 50vh;
        text-align: center;
        margin: 10vh 10vw 0;
        padding: 1rem;
        overflow-wrap: break-word;
      }

      .content-area {
        width: 100vw;
        min-height: 30vh;
        margin-bottom: 10vh;
      }

      .svg {
        text-align: center;
        height: 30vh;
        width: 100vw;
        margin-bottom: 20px;
        position: absolute;
        bottom: 0;
      }
  }

</style>
