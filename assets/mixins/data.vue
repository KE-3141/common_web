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
                    'main': ['あなたのビジネス、','スグにスタート。'],
                    'logo': false, //trueならmainは無視される
                    'sub': ['ロゴも、サイトも、ぜんぶおまかせ。', 'まとめてパックの安心価格。'],
                },

                //第一階層: メッセージを載せるページ
                //見出しか本文か
                messages: [
                  {
                      'heading': [
                          'そろそろ作りたいもの、',
                          'たくさん。'
                      ],
                      'main_text': [
                          '分かってはいたけれど、ビジネスを始めるって結構大変。',
                          'やらないといけないことも、やりたいこともどっさり。',
                          'あれもこれも作りたい。',
                          'ああ、作りたいったら作りたい。'
                      ],
                      'content': 'annoyed.svg',
                  },
                    {
                        'heading': [
                            '新ビジネス、','カッコつけたい。'
                        ],
                        'main_text': [
                            'せっかくの船出は、やっぱりカッコいいデザインでキメていきたいところ。',
                            'スグスタなら、あなたの名刺からロゴ、ウェブサイトに至るまで、',
                            'ビジネスのスタートに必要なデザインをトータルコーディネートします。',
                        ],
                        'content': 'water.svg'
                    },
                    {
                        'heading': [
                            'とはいっても、','リーズナブルが一番。'
                        ],
                        'main_text': [
                            '複数の制作を任せられる業者は、案外少ないもの。',
                            'イメージのすり合わせや、ロゴデータの受け渡しを都度行うのも大変です。',
                            'スグスタなら、安心のパック料金で、何が作れるのか、いくらかかるのかもしっかり把握。',
                            'もちろん、単体のデザインも喜んで承ります。'
                        ],
                        'content': 'piggy.svg',
                    }

                ],

                //SNS
                //インスタグラム
                instagram: {
                    'href': 'https://instagram.com/sugu.sta?igshid=1ctbqj0xnk3dn',
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
                LINE_app: {
                  'href': 'https://lin.ee/KJ6QVAd',
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
                ],

                //もっとも安い値段
                lowest_price: {
                  price: 10000,
                  system: '月額',
                },

                //プラン
                plans: [
                  {
                    svg: 'basic_pack.svg',
                    name: 'ベーシックパック',
                    price_system: '月額',
                    price: 10000,
                    contents: [
                      'ウェブサイト作成',
                      'オリジナルドメインメール',
                    ],
                  },
                  {
                    svg: 'sugusta_pack.svg',
                    name: 'スグスタパック',
                    price_system: '月額',
                    price: 17000,
                    contents: [
                      'ウェブサイト作成(更新あり)',
                      'オリジナルドメインメール',
                      'ロゴ作成',
                      '名刺作成',
                    ],
                  },
                  {
                    svg: 'restaurant_pack.svg',
                    name: '飲食店パック',
                    price_system: '月額',
                    price: 20000,
                    contents: [
                      'ウェブサイト作成(更新あり)',
                      'メニュー作成(A4四面まで)',
                      'ロゴ作成',
                      '名刺作成',
                    ],
                  },
                ],
                plan_message: ['モロ込み、', 'しかも初期費用', '¥ 0'],

                single_menus: [
                  {
                    message: {
                      heading: ['単体のデザインも', '承ります。'],
                      main_text: [
                        'ロゴ入りの',
                        'オリジナルカップ',
                        'に自慢のコーヒー',
                        'を淹れたい？',
                        '自慢の表札を',
                        '皆に見せびらかしたい？',
                        'メニューにないもの',
                        'のデザインも',
                        'ご相談ください。'
                      ],
                    },
                    items: [
                      { name: 'ウェブサイト作成（更新あり)', price: 15000, suffix: '月額' },
                      { name: '名刺作成', price: 15000 },
                      { name: 'ロゴ作成', price: 50000 },
                      { name: 'オリジナルドメインメール', price: 1000, suffix: '月額 11人目以降 + ¥500' },
                      { name: 'メニュー作成（A4一面)', price: 5000 },
                      { name: '写真撮影（5枚単位）', price: 5000 },
                      { name: 'ショップカード', price: 5000 },
                      { name: '起業用書類代行', price: 10000 },
                      { name: '紙袋デザイン', price: 5000 },
                    ],

                  }
                ],

                contacts: [
                  {
                    label: 'instagram.svg',
                    href: 'https://instagram.com/sugu.sta?igshid=1ctbqj0xnk3dn',
                  },
                  {
                    label: 'LINE_app.svg',
                    href: 'https://lin.ee/KJ6QVAd',
                  },
                ],

                contact_message: {
                  heading: ['まずはお気軽に話しかけてください。'],
                  main_text: ['あなたと仕事ができる日を', '楽しみにしています。'],
                },

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
