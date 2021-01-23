<template>
  <div class="logo" v-if="$static.logo.type=='text'">
    {{ $static.logo.content }}
  </div>

  <div class="logo" v-else-if="$static.logo.type=='image'">
    <img :src="$static.logo.content" alt="" />
  </div>

  <div class="logo" v-else-if="$static.logo.type=='svg'">
    <svg :xlms="$static.logo.content" alt="logo" />
  </div>
</template>

<script>
import logo_svg from './logo_svg.vue';

export default {
  components: {
    logo_svg,
  },
}
</script>
