<template>
  <div>
    <h2>{{ isEditMode ? 'Edit Student' : 'Add New Student' }}</h2>
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
        <label for="identification">Identification:</label>
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
        <button type="submit">{{ isEditMode ? 'Update' : 'Submit' }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentForm',
  props: ['id'], // Prop to receive student ID when editing
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
      },
      isEditMode: false // To track if it's an edit mode
    };
  },
  async created() {
    if (this.id) {
      this.isEditMode = true;
      try {
        const response = await axios.get(`http://localhost:3000/api/students/${this.id}`);
        this.form = {
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          identification: response.data.identification,
          dateOfBirth: response.data.date_of_birth,
          email: response.data.email,
          phoneNumber: response.data.phone_number,
          address: response.data.address
        };
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const payload = { student: this.form };
        if (this.isEditMode) {
          await axios.put(`http://localhost:3000/api/students/${this.id}`, payload);
          alert('Student updated successfully');
        } else {
          await axios.post('http://localhost:3000/api/students', payload);
          alert('Student added successfully');
        }
        this.$router.push('/students');
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any necessary scoped styles here */
</style>

