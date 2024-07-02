<template>
    <div>
      <h2>Add New Student</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="first_name">First Name:</label>
          <input type="text" id="first_name" v-model="form.firstName" required>
        </div>
        <div>
          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name" v-model="form.lastName" required>
        </div>
        <div>
          <label for="last_name">identification:</label>
          <input type="text" id="identification" v-model="form.identification" required>
        </div>
        <div>
          <label for="date_of_birth">Date of Birth:</label>
          <input type="date" id="date_of_birth" v-model="form.dateOfBirth" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label for="phone_number">Phone Number:</label>
          <input type="tel" id="phone_number" v-model="form.phoneNumber" required>
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="form.address" required>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          identification: '',
          dateOfBirth: '',
          email: '',
          phoneNumber: '',
          address: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here, e.g., send data to API
        console.log('Form submitted with data:', this.form);
        // Example of how to reset form fields after submission
        this.form = {
          firstName: '',
          lastName: '',
          identification: '',
          dateOfBirth: '',
          email: '',
          phoneNumber: '',
          address: ''
          
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any necessary scoped styles here */
  </style>
  