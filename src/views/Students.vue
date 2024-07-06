<template>
  <div>
    <h1 class="font-bold">Enrolled Students</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="student in students" :key="student.id">
          <div class="student-card">
            <h3>{{ student.name }}</h3>
            <p><strong>Date of Birth:</strong> {{ student.date_of_birth }}</p>
            <p><strong>Email:</strong> {{ student.email }}</p>
            <p><strong>Phone Number:</strong> {{ student.phone_number }}</p>
            <p><strong>Address:</strong> {{ student.address }}</p>
            <p><strong>Identification:</strong> {{ student.identification }}</p>
            <div class="flex flex-row space-x-4">
              <button @click="viewStudentDetails(student.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>
              <button @click="editStudent(student.id)" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit</button>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentsPage',
  data() {
    return {
      students: [],
      loading: true
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/students');
      this.students = response.data; // Assuming API response is an array of students
      this.loading = false;
    } catch (error) {
      console.error('Error fetching students:', error);
      this.loading = false; // Handle error state
    }
  },
  methods: {
    viewStudentDetails(id) {
      this.$router.push({ name: 'StudentDetails', params: { id } });
    },
    editStudent(id) {
      this.$router.push({ name: 'EditStudent', params: { id } });
    }
  }
};
</script>

<style scoped>
.student-card {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>
