<template>
  <div>
    <h2>Add New Student</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Form fields -->
      <div>
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="form.first_name" required>
      </div>
      <div>
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="form.last_name" required>
      </div>
      <div>
        <label for="identification">Identification:</label>
        <input type="text" id="identification" v-model="form.identification" required>
      </div>
      <div>
        <label for="date_of_birth">Date of Birth:</label>
        <input type="date" id="date_of_birth" v-model="form.date_of_birth" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" v-model="form.phone_number" required>
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="form.address" required>
      </div>
      <!-- Error message -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        identification: '',
        date_of_birth: '',
        email: '',
        phone_number: '',
        address: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:3000/api/students', {
          student: this.form
        });
        console.log('Student created:', response.data);
        // Clear the form after successful submission
        this.form = {
          first_name: '',
          last_name: '',
          identification: '',
          date_of_birth: '',
          email: '',
          phone_number: '',
          address: ''
        };
        this.errorMessage = '';
      } catch (error) {
        console.error('Error creating student:', error);
        if (error.response && error.response.status === 422) {
          // Handle 422 Unprocessable Entity error
          this.errorMessage = 'Validation failed. Please check your input.';
        } else {
          this.errorMessage = 'Failed to create student. Please try again later.';
        }
      }
    }
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
