<template>
  <div class="message-left">
    <div class="text">
      <div class="text-box">
        <heading :heading="message.heading" data-aos="fade-down"/>
        <p data-aos="fade-up">
          <span class="inline-block" v-for="text in message.main_text">
            {{ text }}
            <br>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import heading from "./heading";

export default {
  components: {
    heading,
  },
  props: {
    message: Object,
  },
}

</script>

<style lang="scss" scoped>
  .message-left {
    width: 50vw;
    min-height: 100vh;
    vertical-align: middle;
    @extend %centering;
    align-items: start;
    flex-direction: column;
  }

  .text-box {
    margin-left: 10vh;
  }

  .heading {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .inline-block {
    display: inline-block;
  }

  @include screen-mobile {
    .message-left {
      width: 100vw;
      min-height: 50vh;
      align-items:  center;
      justify-content: start;
    }

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-box {
      margin: 0;
      width: 80%;
    }
  }
</style>
