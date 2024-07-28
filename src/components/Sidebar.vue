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
  name: 'SidebarComponent',
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
