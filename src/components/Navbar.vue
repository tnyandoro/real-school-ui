<template>
  <div>
    <div class="red-bar"></div>
    <div class="white-navbar" :class="{ 'sticky': isSticky }">
      <div class="logo-container">
        <img alt="Vue logo" src="@/assets/logo.jpeg" class="h-20">
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
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if we should make the navbar sticky
      if (window.pageYOffset > 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>

<style scoped>
.red-bar {
  height: 34px;
  background-color: #f00;
}

.white-navbar {
  background-color: #fff;
  transition: all 0.3s ease;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
