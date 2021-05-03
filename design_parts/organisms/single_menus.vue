<template>
  <div class="single-menus">
    <div class="single-menu" v-for="menu in $static.single_menus">
      <message_left :message="menu.message" />
      <div class="content-area">
          <div class="left-align">
              <div　class="item" v-for="(item, i) in menu.items" data-aos="fade-up" :data-delay="i * 200">
                <span class="name">
                  {{ item.name }}
                </span>
                <span class="price">
                  ¥{{ item.price.toLocaleString() }}
                  <span v-if="typeof(item.suffix) !== 'undefined'">
                    ({{ item.suffix }})
                  </span>
                </span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import message_left from "../atoms/message_left";

export default {
  components: {
    message_left,
  },

}
</script>

<style lang="scss" scoped>
  .single-menu {
    width: 100vw;
    min-height: 100vh;
    @extend %centering;
  }

  .content-area {
    width: 50vw;
    min-height: 100vh;
    @extend %centering
  }

  .left-align {
    @extend %centering;
    align-items: start;
    flex-direction: column;
    line-height: 3em;
  }

  .item {
    width: 40vw;
    display: flex;
    justify-content: space-between;
    list-style-type: square;
  }

  .name {
    width: max-content;
  }

  .price {
    width: max-content;
    right: 0;
  }

@include screen-mobile {
  .single-menu {
    flex-direction: column;
  }

  .content-area {
    width: 100vw;
    align-items: start;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 10vh;
  }

  .item {
    width: 80vw;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5vh;
  }

  .name {
    font-weight: bold;
  }

  .price {
    justify-content: end;
  }

  .left-align {
    width: 80vw;
    justify-content: start;
    flex-direction: column;
    line-height: 2em;
  }
}
</style>
