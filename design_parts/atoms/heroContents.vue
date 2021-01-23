<template>
  <div class="content" v-if="is_img">
    <img class="image" :class="{slideshow: ($static.heroContents.paths.length > 1)}"
    :src="path" alt="" v-for="path in $static.heroContents.paths">
  </div>
  <div class="content" v-else-if="is_video">
    <video class="video" :src="$static.heroContents.paths[0]"
    autoplay muted playsinline loop></video>
  </div>
</template>

<script>
import data from '~/assets/mixins/data.vue';
export default{
  computed: {
    is_img() {
      return this.$static.heroContents.type === 'image';
    },
    is_video() {
      return this.$static.heroContents.type === 'video';
    }
  }

}
</script>

<style lang="scss">
.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
}

.image {
  width: 100vw;
  height: 100vh;
}

.slideshow {
  position: absolute;

}

.video {
  width: 100vw;
  height: 100vh;
}
</style>
