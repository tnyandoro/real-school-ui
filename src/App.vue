<template>
  <div id="app" class="text-center">
    <Navbar />
    <HelloWorld msg="Welcome to Zimbabwe Real Estate Institute Student Portal"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
/* No custom styles needed for this component */
</style>
