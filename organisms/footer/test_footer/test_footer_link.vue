<template>
<div class="info">
  <a :href="info.href">
   {{ info.label }}
  </a>
</div>
</template>

<script>
 export default {
   props: {
     info: {}
   }
 }
</script>