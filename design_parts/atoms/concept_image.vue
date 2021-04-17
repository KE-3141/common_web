<template>
    <div>
        <img class="image" :src="src" :alt="alt" />
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        alt: String,
    }
}
</script>

<style lang="scss" scoped>
    .image {
        height: 30vh;
        width: 30vh;
        object-fit: cover;
        position: absolute;
    }
</style>