<template>
  <div class="locations">
    <div class="location" v-for="location in $static.locations">
      <div class="name">
          <span class="jp">
            {{ location.name.jp }}
          </span>
          <br>
          <span class="en">
            {{ location.name.en }}
          </span>
      </div>

      <img class="rest-photo" :src="location.image" alt="店舗写真" />

      <div class="address">
        〒{{ location.address.post }}<br>
        {{ location.address.address1 }}<br>
        {{ location.address.address2}}<br>
        <span class="fas fa-phone-alt" />{{ location.address.phone }}<br>

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .location {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 2em;
  }
  .name {
    width: 100vw;
    text-align: center;
  }

  .rest-photo {
    width: 100vw;
    height: 50vh;
    object-fit: cover;
  }

  .address {
    width: 50vw;
    padding: 5vh 5vw;
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%);
  }

  @include screen-mobile {
    .address {
      width: 70vw;
      padding: 5vh 10vw;
    }
  }

</style>
