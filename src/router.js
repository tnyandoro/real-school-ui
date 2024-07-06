import { createRouter, createWebHistory } from 'vue-router';
import Students from './views/Students.vue';
import Courses from './views/Courses.vue';
import Teachers from './views/Teachers.vue';
import StudentForm from './views/StudentForm.vue';
import StudentDetails from './views/StudentDetails.vue';
import AddTeacher from './views/AddTeacher.vue';

const routes = [
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/students/new',
    name: 'NewStudent',
    component: StudentForm
  },
  {
    path: '/students/:id/edit',
    name: 'EditStudent',
    component: StudentForm,
    props: true
  },
  {
    path: '/students/:id',
    name: 'StudentDetails',
    component: StudentDetails,
    props: true
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/teachers/new',
    name: 'AddTeacher',
    component: AddTeacher
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
