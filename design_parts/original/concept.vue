<template>
    <div class="concept">
      <concept_each class="concept-each" v-for="(content, index) in contents" :content="content" :evenodd="checkClass(index)" />
    </div>
</template>

<script>
import concept_each from './concept_each';

export default {
    components: {
      concept_each,
    },

    data() {
      return {
        contents: [
        {
          'main_image': '/images/spice1.jpg',
          'main_alt': 'spice1',
          'sub_image': '/images/spice2.jpg',
          'sub_alt': 'spice2',
          'heading': 'All ingredients are Original.',
          'main_text': [
            '当店で使用している材料は全てオリジナル。',
            'それは、ここでしか味わえない料理を楽しんでいただきたいから。',
            '手間と時間をかけて、じっくりと選び抜かれた極上のスパイスで、',
            'あなたも虜にしてみせます。',
          ]
        },

        {
          'main_image': '/images/spice3.jpg',
          'main_alt': 'spice3',
          'sub_image': '/images/spice2.jpg',
          'sub_alt': 'spice2',
          'heading': 'All people are Welcome.',
          'main_text': ['お客様の宗教、アレルギー、信条を問わず、',
          'どなたでも当店の料理をお楽しみいただけるよう全力を尽くしております。',
          'メニューにない場合でも、お客様のご要望があれば、可能な限りご対応いたします。',
          '全てのお客様に、安心して温かい料理をお召し上がりいただくことが、',
          '私たちの喜びであり、使命です。',
        ]
        }
      ],
    };
  },

    methods: {
      checkClass(index) {
        if (index%2 === 0) {
          return 'c-odd';
        }
        return 'c-even';
      }
    }
}
</script>

<style lang="scss" scoped>
.concept {
    width: 100vw;
  }

.concept-each {
  min-height: 100vh;
}
