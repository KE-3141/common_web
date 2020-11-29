<script>
import Vue from 'vue';

export default {
  data() {
    return {
      static: {
    //header
      //トップ画面いっぱいに広がる画像、もしくは動画
      heroContents: {
        'media': 'image', //img あるいは video
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
      ],

      //ロゴ情報
      logo: {
        'type':     'text',　//text あるいは image
        'content':  'TEST LOGO' //textなら文字、imgならパス
      },

    //index
      topText: {
        'main': 'TEST MAIN',
        'sub': 'test sub text'
      },

    //SNS
      //インスタグラム
      instagram: {
        'href': '',
        'radialGradient': false,
      },

      navs: [
      'home',
      'access',
      'menu',
      'staff',
    ],
    infos: [
      { 
        'label':'facebook',
        'href': 'https://ja-jp.facebook.com'
      },
      {
        'label':'twitter',
        'href': 'https://ja-jp.facebook.com'
      },
      {
        'label':'instagram',
        'href': 'https://ja-jp.facebook.com'
      },
    ],
    buttons: [
      {
        'label': 'button',
      }
    ],
    }
    
      

    }
  },

  created() {
    Vue.prototype.$static = this.static;
  },
}
</script>
