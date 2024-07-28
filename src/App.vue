<template>
  <div id="app">
    <NavbarComponent />
    <div class="main-layout">
      <!-- <Sidebar /> -->
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import Sidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    // Sidebar
  }
};
</script>

