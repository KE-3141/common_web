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
                    'overlay': false,
                },

                //グローバルナビゲーションのラベルとパス情報
                nav_links: [
                    //label => ヘッダーのリンクのテキスト　href => 飛ばしたい先のページURL
                    {
                        'label': 'HOME',
                        'href': '~/design_parts/templates/index.vue'
                    },
                    {
                        'label': 'ABOUT',
                        'href': '~/design_parts/templates/access.vue'
                    },
                    {
                        'label': 'PACKS',
                        'href': '~/design_parts/templates/menu.vue'
                    },
                    {
                        'label': 'CONTACT',
                        'href': '~/design_parts/templates/contact.vue'
                    },
                ],

                //ロゴ情報
                logo: {
                    'type': 'svg', //text, svg あるいは image
                    'content': '/svg/logo.vue' //textなら文字、image, svgならパス
                },

                //index
                topText: {
                    'main': ['あなたのビジネス、スグにスタート'],
                    'logo': false, //trueならmainは無視される
                    'sub': ['ロゴも、サイトも、ぜんぶおまかせ。', 'まとめてパックの安心価格。'],
                },

                //第一階層: メッセージを載せるページ
                //見出しか本文か
                messages: [
                  {
                      'heading': [
                          'そろそろ作りたいもの、たくさん。'
                      ],
                      'main_text': [
                          '分かってはいたけれど、ビジネスを始めるって結構大変。',
                          'やらないといけないことも、やりたいこともどっさり。',
                          'あれもこれも作りたい。',
                          'ああ、作りたいったら作りたい。'
                      ],
                  },
                    {
                        'heading': [
                            '新ビジネス、カッコつけたい。'
                        ],
                        'main_text': [
                            'せっかくの船出は、やっぱりカッコいいデザインでキメていきたいところ。',
                            'スグスタなら、あなたの名刺からロゴ、ウェブサイトに至るまで、',
                            'ビジネスのスタートに必要なデザインをトータルコーディネートします。',
                        ],
                    },
                    {
                        'heading': [
                            'とはいっても、リーズナブルが一番。'
                        ],
                        'main_text': [
                            '複数の制作を任せられる業者は、案外少ないもの。',
                            'イメージのすり合わせや、ロゴデータの受け渡しを都度行うのも大変です。',
                            'スグスタなら、安心のパック料金で、何が作れるのか、いくらかかるのかもしっかり把握。',
                            'もちろん、単体のデザインも喜んで承ります。'
                        ],
                    }

                ],

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
