<template>
  <div>
    <app-navbar/>
    <app-content-slider/>
    <app-content-animes-card/>
  </div>
</template>

<script>
  import Navbar from './shareds/Navbar'
  import Slider from './home-contents/Slider'
  import AnimesCard from './home-contents/AnimesCard'

  export default {
    name: 'Home',
    components: {
      'app-navbar': Navbar,
      'app-content-slider': Slider,
      'app-content-animes-card': AnimesCard,
    }
  }
</script>

<style>

</style>
