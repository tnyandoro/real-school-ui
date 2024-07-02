<template>
    <div>
      <h1>Add New Teacher</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="first_name">First Name:</label>
          <input type="text" id="first_name" v-model="teacher.first_name" required />
        </div>
        <div>
          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name" v-model="teacher.last_name" required />
        </div>
        <div>
          <label for="identification">Id Number :</label>
          <input type="text" id="identification" v-model="teacher.identification" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="teacher.email" required />
        </div>
        <div>
          <label for="phone_number">Phone Number:</label>
          <input type="text" id="phone_number" v-model="teacher.phone_number" required />
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="teacher.address" required />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddTeacher',
    data() {
      return {
        teacher: {
          first_name: '',
          last_name: '',
          identification: '',
          email: '',
          phone_number: '',
          address: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          await axios.post('http://localhost:3000/api/teachers', this.teacher);
          this.$router.push('/teachers');
        } catch (error) {
          console.error('Error adding teacher:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  
  form > div {
    margin-bottom: 10px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    padding: 5px;
    font-size: 1rem;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  