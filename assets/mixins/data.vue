<script>
import Vue from 'vue';

export default {
    data() {
        return {
            static: {
                animation: "fade",
                //header
                //トップ画面いっぱいに広がる画像、もしくは動画
                heroContents: {
                    'type': 'video', //img あるいは video
                    'paths': ['/videos/TEST_SURYA.mp4'], //videoなら必ず一つ。 imgで複数指定するとスライドショーになる。
                    'overlay': true,
                },

                //グローバルナビゲーションのラベルとパス情報
                nav_links: [
                    //label => ヘッダーのリンクのテキスト　href => 飛ばしたい先のページURL
                    {
                        'label': 'HOME',
                        'href': '~/design_parts/templates/index.vue'
                    },
                    {
                        'label': 'ACCESS',
                        'href': '~/design_parts/templates/access.vue'
                    },
                    {
                        'label': 'MENU',
                        'href': '~/design_parts/templates/menu.vue'
                    },
                ],

                //ロゴ情報
                logo: {
                    'type': 'svg', //text, svg あるいは image
                    'content': '/svg/logo.vue' //textなら文字、image, svgならパス
                },

                //index
                topText: {
                    'main': 'TEST MAIN TEXT',
                    'logo': true, //trueならmainは無視される
                    'sub': '都内の本格インド料理店',
                },

                //第一階層: メッセージを載せるページ
                //見出しか本文か
                message: {
                    'index': {
                        'heading': [
                            '本格インド料理を こだわり抜いた食材を 全てのお客様に'
                        ],
                        'main_text': [
                            '1999年創業以来、私たちは、みなさまに愉しんでいただけるインド料理を磨き上げてきました。\n世界中のだれもが笑顔になれる料理をご提供するために、今日も明日も、明後日も。\nSURYAはいつでもお待ちしております。 \n\n店主 バンダーリ・ビジャイ',
                        ],
                    } //index,

                },

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

                //住所
                locations: [
                  {
                    name: {
                      'jp': '日本橋',
                      'en': 'Nihombashi'
                    },
                    image: '/images/spice1.jpg',
                    address: {
                      'post': '103-0027',
                      'address1': '東京都中央区日本橋2-7-1',
                      'address2': '東京日本橋タワー',
                      'phone': '03-6281-8481',
                    }
                  },
                  {
                    name: {
                      'jp': '東麻布',
                      'en': 'higashiazabu'
                    },
                    image: '/images/spice2.jpg',
                    address: {
                      'post': '106-0044',
                      'address1': '東京都港区東麻布2-12-4',
                      'address2': 'アミタビル 1F',
                      'phone': '03-3583-0023',
                    }
                  },
                  {
                    name: {
                      'jp': '芝',
                      'en': 'Shiba'
                    },
                    image: '/images/spice3.jpg',
                    address: {
                      'post': '108-0014',
                      'address1': '東京都港区芝4-9-3',
                      'address2': '芝石井ビル 1F',
                      'phone': '03-6809-4550',
                    }
                  },
                ]
            }
        }
    },

    created() {
        Vue.prototype.$static = this.static;
    },

    //onScrollフックを作成
    mounted() {
        // Register onScroll event
        if (!this.$options.onScroll) return
        requestAnimationFrame(() => { // ページ遷移の際にVueRouterが実行するy=0へのスクロールを無視するための処理です
            if (this._isDestroyed) return // この数フレームの間にコンポーネントが破棄される可能性を考慮しています
            window.addEventListener('scroll', this.$options.onScroll)
        })
    },
    destroyed() {
        // Unregister onScroll event
        if (!this.$options.onScroll) return
        window.removeEventListener('scroll', this.$options.onScroll)
    }
}
</script>
