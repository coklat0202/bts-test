<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light-title">Anime</span>
      <span class="font-weight-light-title">Manga</span>
      <span class="font-weight-light-title">Drama</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Masuk</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
  nav {
    height: 56px;
    background-color: #ed1c24!important;
    color: #fff!important;
  }
  i {
    color: #fff!important;
  }
  .font-weight-light-title {
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;
  }
  .v-btn {
    /* background-color: #fff!important; */
    color: #fff!important;
    font-family: 'Roboto', sans-serif !important;
    /* margin-right: 5px */
  }
</style>