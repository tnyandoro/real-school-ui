<template>
    <div>
      <h1>Teachers</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="!loading && !error">
        <li v-for="teacher in teachers" :key="teacher.id">
          <p>Name: {{ teacher.name }}</p>
          <p>Email: {{ teacher.email }}</p>
          <p>Phone Number: {{ teacher.phone_number }}</p>
          <p>Address: {{ teacher.address }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TeachersPage',
    data() {
      return {
        teachers: [],
        loading: true,
        error: null
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/api/teachers'); // Replace with your API endpoint
        this.teachers = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching teachers:', error);
        this.error = 'Failed to fetch teachers. Please try again later.';
        this.loading = false;
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
  }
  </style>
  