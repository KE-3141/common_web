<script>
import Vue from 'vue';

export default {
  data() {
    return {
      static: {
    //header
      //トップ画面いっぱいに広がる画像、もしくは動画
      heroContents: {
        'type': 'image', //img あるいは video
        'paths': ['/images/test.jpg'], //videoなら必ず一つ。 imgで複数指定するとスライドショーになる。
      },

      //グローバルナビゲーションのラベルとパス情報
      nav_links: [
        //label => ヘッダーのリンクのテキスト　href => 飛ばしたい先のページURL
        {
          'label': 'HOME',
          'href': '@/templates/index.vue'
        },
        {
          'label': 'ACCESS',
          'href': '@/templates/access.vue'
        },
        {
          'label': 'MENU',
          'href': '@/templates/menu.vue'
        },
      ],

      //ロゴ情報
      logo: {
        'type':     'text',　//text あるいは image
        'content':  'TEST LOGO' //textなら文字、imgならパス
      },

    //index
      topText: {
        'main': 'TEST MAIN TEXT',
        'sub': 'test sub text'
      },
      message: '本格インド料理を、こだわり抜いた食材を、全てのお客様に。',

    //SNS
      //インスタグラム
      instagram: {
        'href': '',
        'radialGradient': false,
      },
      //ツイッター
      twitter: {
        'href': '',
      },
      //facebook
      facebook: {
        'href': '',
      },
    }
    }
  },

  created() {
    Vue.prototype.$static = this.static;
  },

  //onScrollフックを作成
  mounted () {
    // Register onScroll event
    if (!this.$options.onScroll) return
    requestAnimationFrame(() => { // ページ遷移の際にVueRouterが実行するy=0へのスクロールを無視するための処理です
      if (this._isDestroyed) return // この数フレームの間にコンポーネントが破棄される可能性を考慮しています
      window.addEventListener('scroll', this.$options.onScroll)
    })
  },
  destroyed () {
    // Unregister onScroll event
    if (!this.$options.onScroll) return
    window.removeEventListener('scroll', this.$options.onScroll)
  }
}
</script>
