<template>
<!-- <v-app> -->
  <div>
    <app-navbar/>
    <app-content-slider/>
  </div>
</template>

<script>
  import Navbar from './shareds/Navbar'
  import Slider from './home-contents/Slider'

  export default {
    // data: () => ({
      name: 'Home',
      components: {
        'app-navbar': Navbar,
        'app-content-slider': Slider,
      }
    // })
  }
</script>

<style>

</style>
