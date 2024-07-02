<template>
  <div>
    <h1>Courses</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!loading && !error">
      <li v-for="course in courses" :key="course.id">
        <router-link :to="`/course/${course.id}`">{{ course.name }}</router-link>
        <p>{{ course.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CoursesPage',
  data() {
    return {
      courses: [],
      loading: true,
      error: null
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/courses');
      this.courses = response.data;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching courses:', error);
      this.error = 'Failed to fetch courses. Please try again later.';
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
}
a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
