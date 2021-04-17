<template>
<div>
    <div class="concept-even" v-if="is_even">
        <message class="message" :location="'index'" :index="index" />

    </div>

    <div class="concept-odd" v-if="!is_even">

    </div>
</div>
</template>

<script>
export default {
    props: {
        index: Number,
        text: String,
        images: Array,
    },////////一旦凍結
    computed: {
        is_even() {
            return this.index % 2 === 0;
        },
    }
}
</script>