<template>
  <div class="plans">
    <div class="message">
      <span v-for="text in $static.plan_message">
        {{ text }}
      </span>
    </div>
    <div class="plan-row">
      <div class="plan" v-for="(plan, i) in $static.plans">
        <span class="svg-area" data-aos="zoom-in-up" data-aos-duration="500" :data-aos-delay="i * 200">
          <svg_element class="svg" :name="plan.svg" />
        </span>
        <span class="text-box" data-aos="zoom-in-up" data-aos-duration="500" :data-aos-delay="i * 200 + 100">
          <div class="name">
            {{ plan.name }}
          </div>
          <div class="price">
            <span class="price-system">
              {{ plan.price_system }}
            </span>
            <span class="yen">
              ¥ {{ plan.price.toLocaleString() }}
            </span>
          </div>
          <span class="line" />
          <ul class="contents">
            <li class="content" v-for="content in plan.contents">
              {{ content }}
            </li>
          </ul>
        </span>
      </div>

    </div>

  </div>
</template>

<script>
import svg_element from '../atoms/svg_element';
  export default {
    components: {
      svg_element,
    },

  }

</script>

<style lang="scss" scoped>
  .plans {
    @extend %centering;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 20vh;
  }
  .message {
    font-size: $jump_rate;
  }
  .plan-row {
    @extend %centering;
    align-items: start;
    flex-direction: row;
    margin-bottom: 20vh;
  }
  .plan {
    @extend %centering;
    flex-direction: column;
    margin: 0 2.5vw;

    .svg-area {
      height: 40vh;
      @extend %centering;
      align-items: static;
    }

    .svg {
      width: 50%;
    }

    .name {
      font-size: $jump_rate;
    }

    .price {
      .price-system {
        font-size: 80%;
      }
      .yen {
        font-weight: bold;
      }
    }

    .text-box {
      @extend %centering;
      flex-direction: column;
    }

    .contents {
      @extend %centering;
      flex-direction: column;
      justify-content: start;
      align-items: start;

      .content {
        text-align: left;
        list-style-type: square;
        line-height: 2.5em;
        margin-left: 2em;
      }

    }

    .line {
      @extend %centering;
      width: 10vw;
      height: 3px;
      margin: 0 0 2em;
      border-radius: 2px;
      background-color: #000;
    }
  }

  @include screen-mobile {
    .plan-row {
      flex-direction: column;
    }

    .plan {
      margin-bottom: 10vh;
    }

    .line {
      width: 50vw;
    }
  }

</style>
