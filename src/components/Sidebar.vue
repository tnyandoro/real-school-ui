<template>
  <div class="sidebar">
    <div v-if="isStudentsPage">
      <button @click="navigateToAddStudent">Add New Student</button>
    </div>
    <div v-else-if="isTeachersPage">
      <button @click="navigateToAddTeacher">Add New Teacher</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    isStudentsPage() {
      return this.$route.path === '/students';
    },
    isTeachersPage() {
      return this.$route.path === '/teachers';
    }
  },
  methods: {
    navigateToAddStudent() {
      this.$router.push('/students/new');
    },
    navigateToAddTeacher() {
      this.$router.push('/teachers/new');
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
  position: fixed;
  height: 100%;
  /* top: 0; /* Stick to the top of the viewport */
  /* left: 0; */
  /* overflow-y: auto; Enable scrolling if content exceeds height */ 
}

.sidebar button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sidebar button:hover {
  background-color: #0056b3;
}
</style>
