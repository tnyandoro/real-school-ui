<template>
    <div class="login-form max-w-md mx-auto p-8 border rounded shadow-lg">
      <h1 class="text-2xl font-bold mb-4">{{ msg }}</h1>
      
      <h3 class="text-lg font-semibold mb-4">Login or Signup</h3>
      
      <form @submit.prevent="login" class="space-y-4">
        <div class="form-group">
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" v-model="email" required class="mt-1 block w-full p-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300">
        </div>
        <div class="form-group">
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" v-model="password" required class="mt-1 block w-full p-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300">
        </div>
        <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
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
        // Here you can perform login logic, such as making an API request to your backend
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      }
    }
  }
  </script>
  
  <style scoped>
  /* No custom styles needed for this component */
  </style>
  