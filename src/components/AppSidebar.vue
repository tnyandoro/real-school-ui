<template>
  <div class="sidebar h-screen bg-gray-800 text-white p-4">
    <ul class="space-y-4">
      <li class="text-red-600 cursor-pointer flex items-center" @click="navigateToHome">
        <i class="text-red-600 pi pi-home mr-2"></i>
        Home
      </li>
      <li class="text-red-600 cursor-pointer flex items-center" @click="navigateToCourses">
        <i class="text-red-600 pi pi-book mr-2"></i>
        Courses
      </li>
      <li class="text-red-600 cursor-pointer flex items-center" @click="navigateToTeachers">
        <i class="text-red-600  pi pi-users mr-2"></i>
        Teachers
      </li>
      <li class="text-red-600 cursor-pointer flex items-center" @click="navigateToStudents">
        <i class="text-red-600 pi pi-user mr-2"></i>
        Students
      </li>
      <!-- <li
            :name="$t('sidebar.dashboard')"
            icon="tim-icons icon-chart-pie-36"></li> -->
    </ul>
    <div v-if="isStudentsPage" class="mt-6">
      <button @click="navigateToAddStudent" class="w-full py-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white rounded">Add New Student</button>
      <div v-if="isStudentDetailsPage">
        <button @click="navigateToStudentForm" class="w-full py-2 bg-green-500 hover:bg-green-700 text-white rounded">Edit Student</button>
      </div>
    </div>
    <div v-else-if="isTeachersPage" class="mt-6">
      <i class="pi pi-plus py-2 mr-2 font-semibold text-red-600 cursor-pointer" @click="navigateToAddTeacher"></i>
      <span class="py-2 font-semibold text-red-600 cursor-pointer" @click="navigateToAddTeacher">Add New Teacher</span>
    </div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
  name: 'AppSidebar',
  computed: {
    isStudentsPage() {
      return this.$route.path.startsWith('/students');
    },
    isTeachersPage() {
      return this.$route.path === '/teachers';
    },
    isStudentDetailsPage() {
      return this.$route.name === 'StudentDetails';
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    navigateToCourses() {
      this.$router.push('/courses');
    },
    navigateToTeachers() {
      this.$router.push('/teachers');
    },
    navigateToStudents() {
      this.$router.push('/students');
    },
    navigateToAddStudent() {
      this.$router.push('/students/new');
    },
    navigateToStudentForm() {
      const studentId = this.$route.params.id;
      this.$router.push({ name: 'EditStudent', params: { id: studentId } });
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
}
</style>
