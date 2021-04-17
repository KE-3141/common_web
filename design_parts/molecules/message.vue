<template>
<div class="message">
    <heading :heading="message.heading" />
    <main_text :main_text="message.main_text" />
</div>
</template>

<script>
import heading from '../atoms/heading.vue';
import main_text from '../atoms/main_text.vue';

export default {
    components: {
        heading,
        main_text,
    },
    props: {
        location: String,
        index: Number,
    },
    computed: {
        message() {
            return {
                'heading': this.$static.message[this.location].heading[this.index],
                'main_text': this.$static.message[this.location].main_text[this.index],
            };
        },
    },

    methods: {
        fire() {
            console.log('fire');
        }

    },
}
</script>

<style lang="scss" scoped>
.message {
    width: 100vw - $margin_x*2;
    min-height: 70vh;
    margin: $margin_y*2 $margin_x;
    text-align: map-get($message, "text-align");
}
.heading {
    margin-bottom: map-get($message, "header-to-main");
}
</style>
