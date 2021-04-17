<template>
  <component :is="svg_path" />
</template>

<script>
export default {
  name: "svg_image",
  data() {
    return {
      svg_file: 'water.svg',
    };
  },
  computed: {
    svg_path() {
      return import(`@/assets/svg/${this.svg_file}`);
    }
  }
  }
</script>