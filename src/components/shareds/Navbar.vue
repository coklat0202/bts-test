<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light-title">App Test</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    
    <router-link to="/login">
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Masuk</span>
      </v-btn>
    </router-link>
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
    color: #fff!important;
    font-family: 'Roboto', sans-serif !important;
  }
  a {
		text-decoration: none!important;
	}
</style>