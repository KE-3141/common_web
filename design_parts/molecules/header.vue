<template>
<div>
    <header>
        <div class="nav-bar" :class="[is_on_hero, {is_logo_at_center: is_logo_at_center}]" v-scroll="handleScroll">
            <logo class="logo" :is_header="true" />
            <!-- モバイル版のみコンテクストメニューを表示 -->
            <contextMenu v-if="!is_pc" :is_opened="is_opened" @tapContext="tapContext" />
            <!-- ヘッダーのリンク-->
            <div class="link-buttons" :class="{opened: is_opened}">
                <ul>
                    <li v-for="(link, i) in $static.nav_links" :key="i">
                        <btn :href="link.href" :label="link.label" class="nav-button" />
                    </li>
                </ul>
            </div>

        </div>

    </header>
</div>
</template>

<script>
import scss_var from '~/assets/scss/_mixin.scss';
import contextMenu from '~/design_parts/atoms/contextMenu';
import logo from '~/design_parts/atoms/logo.vue';
import btn from '~/design_parts/atoms/button.vue';

export default {
    components: {
        contextMenu,
        logo,
        btn,
    },

    data() {
        return {
            window_size: 0,
            window_height: 0,
            is_pc: true,
            is_opened: false,
            is_on_hero: {is_on_hero: true},
        }
    },

    computed: {
      is_logo_at_center() {
        return this.$static.topText.logo;
      },
    },

    mounted() {
        this.window_size = window.innerWidth;
        this.window_height = window.innerHeight;
        this.is_pc = this.window_size >= 768; //768(px)は画面サイズのブレイクポイント
    },

    methods: {
        tapContext() {
            this.is_opened = !this.is_opened;
        },
        handleScroll: function (evt, el) {
            if (window.scrollY < this.window_height) {
                this.is_on_hero = {
                  is_on_hero: true,
                };
            } else {
                this.is_on_hero = {
                  is_on_hero: false,
                };
            }
        }
    },
}
</script>

<style lang="scss">
a:active,
a:hover,
a:link,
a:visited {
    color: inherit;
}

.nav-bar {
    @extend .transition;
    width: 100vw;
    height: map-get($header, "height");
    background-color: map-get($header, "background-color");
    color: map-get($header, "font-color");
    fill: map-get($header, "font-color");
    stroke: map-get($header, "font-color");
    position: fixed;
    z-index: 9000;
}

.logo {
    margin-left: map-get($header, "height");
    display: inline-block;
    text-align: center;
    line-height: map-get($header, "height");
    position: absolute;
    //fill: map-get($header, "font-color");
    z-index: 9000;
}

.link-buttons {
    height: map-get($header, "height");
}

.nav-button {
    width: 10vw;
    height: map-get($header, "height");
    margin: 0 2vw;
    position: relative;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    transition: map-get($button, "transition");
    z-index: 9001;

    &:hover {
      transition: map-get($button, "transition");
      @extend .button_hovered;
    }
}

ul {
    height: map-get($header, "height");
    line-height: map-get($header, "height");
    display: flex;
    justify-content: flex-end;
}

.is_on_hero {
        background-color: map-get($header, "background-color-first");
        color: map-get($header, "font-color-first");
        fill: map-get($header, "font-color-first");
        stroke: map-get($header, "font-color-first");

      &.is_logo_at_center {
      fill: $transparent;
      stroke: $transparent;
    }
    }

@include screen-mobile {

    // モバイル用のスタイル(差分のみ)
    .link-buttons {
        width: 70vw;
        height: 100vh;
        position: fixed;
        background-color: map-get($footer, "background-color");
        border: solid 1px map-get($footer, "background-color");
        transform: translateX(100vw);
        transition: all 0.5s;
        z-index: 10000;
    }

    .link-buttons.opened {
        transform: translateX(30vw);
    }

    .logo {
        width: 50vw;
        margin-left: 25vw;
        display: inline-block;
        text-align: center;
        line-height: map-get($header, "height");
        position: absolute;
    }

    ul {
        height: map-get($header, "height");
        line-height: 0;
        display: inline-block;
    }

    li {
        width: 70vw;
        height: map-get($header, "height");
        text-align: center;
        display: list-item;
        position: relative;
        transform: translateY(50%);
        -webkit-transform: translateY(50%);
        color: map-get($header, "font-color-first");
    }
}
</style>
