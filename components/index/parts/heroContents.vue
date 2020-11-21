<template>
  <div class="container" v-if="is_img">
    <img class="image" :class="{slide-show: heroContents.length > 1}"
    :src="content" alt="" v-for="content in heroContents">
  </div>
  <div class="container" v-else>
    <video class="video" :src="content"
    autoplay muted playsinline loop></video>
  </div>
</template>

<script>
import data from '@/assets/mixins/data.vue'
export default{
  computed: {
    is_img() {
      return this.heroContents.media === 'img';
    },
    is_video() {
      return this.heroContents.media === 'video';
    }
  }

}
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.image {
  width: 100vw;
  height: 100vh;
}

.slide-show {
  
}

.video {
  width: 100vw;
  height: 100vh;
}
</style>
