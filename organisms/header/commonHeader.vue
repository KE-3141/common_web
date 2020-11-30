<template>
<div>
  <header>
    <div class="nav-bar scrolled">
      <logo class="logo"/>
      <!-- モバイル版のみコンテクストメニューを表示 -->
      <contextMenu v-if="!is_pc" :is_opened="is_opened" @tapContext="tapContext" />
      <!-- ヘッダーのリンク-->
      <div class="link-buttons" :class="{opened: is_opened}">
        <ul>
          <li v-for="link in $static.nav_links">
            <btn :href="link.href" :label="link.label"
                    class="nav-button"/>
          </li>
        </ul>
      </div>

    </div>

  </header>
</div>
</template>

<script>
import scss_var from '../../assets/scss/_mixin.scss';
import contextMenu from './parts/contextMenu';
import logo from './parts/logo.vue';
import btn from '~/organisms/molecules/atoms/button.vue';

export default {
  components: {
    contextMenu,
    logo,
    btn,
  },

  data() {
    return {
      window_size: 0,
      is_pc: true,
      is_opened: false,
    }
  },

  mounted() {
    this.window_size = window.innerWidth;
    this.is_pc = this.window_size >= 768; //768(px)は画面サイズのブレイクポイント
  },

  methods: {
    tapContext() {
      this.is_opened = !this.is_opened;
    }
  },
}
</script>

<style lang="scss">
a:active,
a:hover,
a:link,
a:visited {
    color: $header_font_color;
}

.nav-bar {
    width: 100vw;
    height: $header_height;
    background-color: $header_background_color;
    color: $header_font_color;
    position: fixed;
    z-index: 9000;

    &.scrolled {
      background-color: $transparent;
    }
}

.logo {
  margin-left: $header_height;
  display: inline-block;
  text-align: center;
  line-height: $header_height;
  position: absolute;
}

.link-buttons {
  height: $header_height;
    }

.nav-button {
  width: 10vw;
  height: $header_height;
  margin: 0 2vw;
  position: relative;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  z-index: 9001;
}

ul {
  height: $header_height;
  line-height: $header_height;
  display: flex;
  justify-content: flex-end;
}

@include screen-mobile {
    // モバイル用のスタイル(差分のみ)
    .link-buttons {
        width: 70vw;
        height: 100vh;
        background-color: #333;
        border: solid 1px #333;
        transform: translateX(100vw);
        transition: all 0.5s;
    }
    .link-buttons.opened {
        transform: translateX(30vw);
    }

    .logo {
      width: 50vw;
      margin-left: 25vw;
      display: inline-block;
      text-align: center;
      line-height: $header_height;
      position: absolute;
    }

    ul {
        height: $header_height;
        line-height: 0;
        display: inline-block;
    }

    li {
        width: 70vw;
        height: $header_height;
        text-align: center;
        display: list-item;
        position: relative;
        transform: translateY(50%);
        -webkit-transform: translateY(50%);
    }
}
</style>
