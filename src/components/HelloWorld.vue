<template>
  <div class="login-form">
    <h1>{{ msg }}</h1>
    
    <h3>Login or Signup</h3>
    
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Here you can perform login logic, such as making an API request to your Rails backend
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
