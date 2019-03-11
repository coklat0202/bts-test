<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
    <!-- <div class="play-button">
      Play
    </div> -->
  </v-carousel>
</template>

<script>
  export default {
    name: 'Slider',
    data: () => ({
      items: [
          {
            src: 'https://iflix-images.akamaized.net/5c84c91fe4b0bda0b416ba00_l_carousel-landscape-wide_s_3000x1687?jpeg[quality]=50&jpeg[chromaSubsampling]=4:4:4&transform=true&resize[]=1440'
          },
          {
            src: 'https://iflix-images.akamaized.net/5c84c91fe4b0bda0b416ba01_l_carousel-landscape-wide_s_3000x1687?jpeg[quality]=50&jpeg[chromaSubsampling]=4:4:4&transform=true&resize[]=1440'
          },
          // {
          //   src: 'https://iflix-images.akamaized.net/5c84c91fe4b0bda0b416ba01_l_carousel-landscape-wide_s_3000x1687?jpeg[quality]=50&jpeg[chromaSubsampling]=4:4:4&transform=true&resize[]=1440'
          // },
          {
            src: 'https://iflix-images.akamaized.net/5c84c91fe4b0bda0b416ba02_l_carousel-landscape-wide_s_3000x1687?jpeg[quality]=50&jpeg[chromaSubsampling]=4:4:4&transform=true&resize[]=1440'
          }
        ]
    })
    // name: 'ContentSlider'
  }
</script>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
  .v-carousel__controls {
    display: none
  }

  .play-button {
    position: absolute;
    top: 70%;
    z-index: 1;
    left : 30%
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #fff;
    background: #ed1c24;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
    font-family: 'Roboto', sans-serif !important;
    width: 70px;
    margin: auto;
  }
</style>