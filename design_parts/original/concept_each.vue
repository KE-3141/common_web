<template>
  <div :class="evenodd">
    <div class="images">
      <img v-scroll="handleScroll" class="main-img" :src="content.main_image" :alt="content.main_alt" :class="scrolled_animation"/>
      <img v-scroll="handleScroll" class="sub-img" :src="content.sub_image" :alt="content.sub_alt" :class="scrolled_animation"/>
    </div>
      <div class="text">
          <div v-scroll="handleScroll" class="heading lamar" :class="scrolled_animation">
              <p>{{ content.heading }}</p>
          </div>
          <div v-scroll="handleScroll" class="main" :class="scrolled_animation">
              <p>
                <span v-for="line in content.main_text">
                  {{ line }}
                </span>
              </p>
          </div>
      </div>
    </div>
</template>

<script>
import scroll_trigger from '~/assets/mixins/scroll_trigger.vue';

export default {
  mixins: [scroll_trigger],

  props: {
    evenodd: String,
    content: Object,
  }
}
</script>

<style lang="scss" scoped>
        .c-odd {
            width: 100vw;
            min-height: 100vh;

            .main-img {
                position: absolute;
                width: 50vw;
                height: 50vh;
                right: 0;
                object-fit: cover;
                z-index: 4000;

                @include screen-mobile {
                  width: 100vw;
                  height: 70vh;
                  position: relative;
                }
            }
            .sub-img {
                position: absolute;
                width: 45vh;
                height: 45vh;
                transform: translateY(100%);
                right: 30%;
                object-fit: cover;
                z-index: 4000;

                @include screen-mobile {
                  display: none;
                }
            }
            .text {
                width: 50vw;
                margin: 10vw;
                margin-left: 0;
                margin-right: 50vw;
                position: relative;
                z-index: 5000;
                text-align: center;

                @include screen-mobile {
                  width: 90vw;
                  height: 70vh;
                  margin: 0 5vw 20vh;
                  text-align: left;
                }

                .heading {
                    font-size: 300%;
                    margin-bottom: 5vh;
                    @include screen-mobile {
                      margin-bottom: 0;
                      transform: translateY(-50%);
                    }
                }
            }
        }

        .c-even {
            width: 100vw;
            min-height: 100vh;
            position: relative;

            .main-img {
                position: absolute;
                width: 50vw;
                height: 50vh;
                left: 0;
                object-fit: cover;
                z-index: 4000;

                @include screen-mobile {
                  width: 100vw;
                  height: 70vh;
                  position: relative;
                }
            }
            .sub-img {
                position: absolute;
                width: 45vh;
                height: 45vh;
                transform: translateY(100%);
                left: 30%;
                object-fit: cover;
                z-index: 4000;

                @include screen-mobile {
                  display: none;
                }
            }
            .text {
                width: 50vw;
                margin: 10vw;
                margin-left: 50vw;
                position: relative;
                z-index: 5000;
                text-align: center;

                @include screen-mobile {
                  width: 90vw;
                  height: 70vh;
                  margin: 0 5vw 20vh;
                  text-align: left;
                }

                .heading {
                    font-size: 300%;
                    margin-bottom: 5vh;
                    transform: translateX(-5vw);

                    @include screen-mobile {
                      margin-bottom: 0;
                      transform: translateY(-50%);
                    }
                }
            }
        }
        .main {
          text-align: center;
        }
</style>
