<template>
  <div class="top-menu">
    <heading class="lamar heading" :heading="'Menu'" />

    <div class="menus">
      <div class="menu" v-for="menu in menus">
        <img class="menu-image" :src="menu.image.path" :alt="menu.image.alt" />
        <span class="name">
          {{ menu.name }}
        </span>
        <span class="price">
          - ¥{{ price(menu.price) }}
        </span>
        <br>
      </div>
    </div>

  </div>
</template>

<script>
import heading from '../atoms/heading';

export default {
  components: {
    heading,
  },
  data() {
    return {
      menus: [
        {
          name: 'バターチキンカレー',
          price: 1000,
          image: {
            path: '/images/menus/butter_chicken_prawn_Makhani.JPG',
            alt: 'menu',
          },
        },
        {
          name: 'チキンティッカ',
          price: 1000,
          image: {
            path: '/images/menus/chicken tikka.JPG',
            alt: 'menu',
          },
        },
      ],
    }
  },
  methods: {
    price(integer) {
      return integer.toLocaleString();
    }
  }
}

</script>

<style lang="scss" scoped>
.menus {

}

.menu {

}

.menu-image {
  width: 80vw;
  height: 80vh;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.price {

}

.name {

}


@include screen-mobile {
  .heading {
    display: block;
    margin: 0 auto;
  }

  .menu-image {
    width: 75vw;
    height: 50vh;
  }

  .name {
    width: auto;
    padding: 0 10px;
    display: inline-block;
    background-color: $red;
    color: white;
    transform: translateY(-50%);
  }

  .price {
    display: inline-block;
    transform: translateY(-50%);
  }

}

</style>
