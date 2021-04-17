<template>
<div class="content" :class="overlay" v-if="is_img">
    <img class="image" :class="{slideshow: ($static.heroContents.paths.length > 1)}" :src="path" alt="" v-for="(path, i) in $static.heroContents.paths" :key="i">
</div>
<div class="content" :class="overlay" v-else-if="is_video">
    <video class="video" :src="$static.heroContents.paths[0]" autoplay muted playsinline loop></video>
</div>
</template>

<script>
import data from '~/assets/mixins/data.vue';
export default {
    computed: {
        is_img() {
            return this.$static.heroContents.type === 'image';
        },
        is_video() {
            return this.$static.heroContents.type === 'video';
        },
        overlay() {
            return {
                "overlay": this.$static.heroContents.overlay,
            };
        }
    }

}
</script>

<style lang="scss" scoped>
.content {
    @extend .full-screen;
    overflow: hidden;
    position: absolute;
}

.image {
    @extend .full-screen;
}

.slideshow {
    position: absolute;
}

.video {
    min-width: 100vw;
    min-height: 100vh;
}

.overlay::after {
    @extend .full-screen;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: "";
    background: rgba(0, 0, 0, 0.4);
}
</style>
