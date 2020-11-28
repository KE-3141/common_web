<template>
  <div class="logo" v-if="$static.logo.type=='text'">
    {{ $static.logo.content }}
  </div>
  <div class="logo" v-else-if="$static.logo.type=='image'">
    <img :src="$static.logo.content" alt="" >
  </div>
</template>
