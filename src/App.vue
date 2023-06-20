<template>
  <NavbarVue class="top-0 z-50" />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Home msg="Welcome to Your Vue.js App Mal" />
  <router-view/>
  <Footer />
</template>

<script>
import NavbarVue from './components/NavbarVue.vue'
import Footer from './components/Footer.vue'
// import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    NavbarVue,
    // Home,
    // eslint-disable-next-line vue/no-unused-components
    Footer
    // eslint-disable-next-line vue/no-unused-components
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
