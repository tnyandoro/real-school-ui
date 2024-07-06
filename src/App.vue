<template>
  <div id="app">
    <NavbarComponent />
    <div class="main-layout">
      <Sidebar />
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
    Sidebar
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  margin-left: 200px; /* Same width as sidebar */
  padding: 20px;
}
</style>
