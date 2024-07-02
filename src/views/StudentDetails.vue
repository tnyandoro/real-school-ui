<template>
    <div>
      <h1>Student Details</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div class="student-details">
          <h3>{{ student.name }}</h3>
          <p><strong>Date of Birth:</strong> {{ student.date_of_birth }}</p>
          <p><strong>Email:</strong> {{ student.email }}</p>
          <p><strong>Phone Number:</strong> {{ student.phone_number }}</p>
          <p><strong>Address:</strong> {{ student.address }}</p>
          <p><strong>Identification:</strong> {{ student.identification }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'StudentDetails',
    props: ['id'], // Prop to receive student ID from route params
    data() {
      return {
        student: {},
        loading: true
      };
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:3000/api/students/${this.id}`);
        this.student = response.data; // Assuming API response is the student object
        this.loading = false;
      } catch (error) {
        console.error('Error fetching student details:', error);
        this.loading = false; // Handle error state
      }
    }
  };
  </script>
  
  <style scoped>
  .student-details {
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
  }
  </style>
  