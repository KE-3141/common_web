<template>
<div>
  <header>
    <div class="nav-bar">
      <logo class="logo" :logo="logo" />
      <!-- モバイル版のみコンテクストメニューを表示 -->
      <contextMenu :is_pc="is_pc" :is_opened="is_opened" @tapContext="tapContext" />
      <!-- ヘッダーのリンク-->
      <div class="link-buttons" :class="{opened: is_opened}">
        <ul>
          <li v-for="link in nav_links">
            <a :href="link.href" class="nav-button">{{ link.label }}</a>
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
import logo from './parts/logo.vue'

export default {
  components: {
    contextMenu,
    logo,
  },

  data() {
    return {
      nav_links: [
        //label => ヘッダーのリンクのテキスト　href => 飛ばしたい先のページURL
        {
          'label': 'HOME',
          'href': '@/pages/index.vue'
        },
        {
          'label': 'ACCESS',
          'href': '@/pages/access.vue'
        },
      ],
      logo: 'TEST LOGO',
      window_size: 0,
      is_opened: false,
    }
  },

  computed: {
    is_pc() {
      return this.window_size >= 768; //768(px)は画面サイズのブレイクポイント
    },
  },

  mounted() {
    this.window_size = window.innerWidth;
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
    color: $header_text_color;
}

.nav-bar {
    width: 100vw;
    height: 10vh;
    background-color: $header_background_color;
    color: $header_text_color;
    position: fixed;
}

.logo {
  margin-left: 10vh;
  display: inline-block;
  text-align: center;
  line-height: 10vh;
  position: absolute;
}

.link-buttons {
  height: 10vh;
    }

.nav-button {
  width: 10vw;
  height: 10vh;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}

ul {
  height: 10vh;
  line-height: 10vh;
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
      line-height: 10vh;
      position: absolute;
    }

    ul {
        margin-top: 10vh;
        height: 10vh;
        line-height: 0;
        display: inline-block;
    }

    li {
        width: 70vw;
        height: 10vh;
        text-align: center;
        display: list-item;
        position: relative;
        transform: translateY(50%);
        -webkit-transform: translateY(50%);
    }
}
</style>
