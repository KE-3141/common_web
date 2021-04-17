<script>
export default {
    data() {
        return {
            is_scrolled: false,
        };
    },

    computed: {
        scrolled_animation() {
            return [
                {
                    is_scrolled: this.is_scrolled
                },
                this.$static.animation
            ];
        }
    },
    methods: {
        handleScroll: function (evt, el) {
            const element_height = this.$el.offsetTop / 2;
            if (window.scrollY > element_height) {
                this.is_scrolled = true;
            } else {
                this.is_scrolled = false;
            }
        }
    },
}
</script>
