<template>
  <div class="contact-page">
    <message_left class="message_left" :message="$static.contact_message" />

    <div class="content-area">
      <div class="buttons">
        <span @click="externalLink(contact.href)" v-for="contact in $static.contacts" data-aos="fade-up" data-aos-offset="0">
          <svg_element class="button" :name="contact.label" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import message_left from '../atoms/message_left';
import svg_element from '../atoms/svg_element';

  export default {
    components: {
      message_left,
      svg_element,
    },
    methods: {
      externalLink(url) {
        window.location.href = url;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .contact-page {
    @extend %centering;
    min-height: 100vh;
  }

  .content-area {
    width: 50vh;
    @extend %centering;
  }

  .buttons {
    @extend %centering;
    flex-direction: column;
  }

  .button {
    width: 5em;
    height: 5em;
    cursor: pointer;
  }

@include screen-mobile {

  .contact-page {
    flex-direction: column;
  }

  .buttons {
    flex-direction: row;
  }

  .content-area {
    width: 100vw;
  }
}

</style>
