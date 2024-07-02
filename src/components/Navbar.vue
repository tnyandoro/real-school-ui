<!-- src/components/Navbar.vue -->

<template>
  <div>
    <div class="red-bar"></div>
    <div class="white-navbar">
      <div class="logo-container">
        <img alt="Vue logo" src="@/assets/logo.jpeg" class="h-20">
      </div>
    </div>
    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <router-link to="/students">Students</router-link>
        </li>
        <li>
          <router-link to="/teachers">Teachers</router-link>
        </li>
        <li>
          <router-link to="/courses">Courses</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.red-bar {
  height: 34px;
  background-color: #f00;
}

.white-navbar {
  
  background-color: #fff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding-left: 1rem;
  padding-right: 1rem;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.logo {
  height: 100%;
  margin-right: 1rem; 
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
