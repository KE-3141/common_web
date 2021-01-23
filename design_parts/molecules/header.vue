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
    color: map-get($header, "font-color");
}

.nav-bar {
    width: 100vw;
    height: map-get($header, "height");
    background-color: map-get($header, "background-color");
    color: map-get($header, "font-color");
    position: fixed;
    z-index: 9000;

    &.scrolled {
      background-color: $transparent;
    }
}

.logo {
  margin-left: map-get($header, "height");
  display: inline-block;
  text-align: center;
  line-height: map-get($header, "height");
  position: absolute;
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
  z-index: 9001;
}

ul {
  height: map-get($header, "height");
  line-height: map-get($header, "height");
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
    }
}
</style>
