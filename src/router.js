// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import StudentsPage from './views/Students.vue';
import TeachersPage from './views/Teachers.vue';
import CoursesPage from './views/Courses.vue';
import LoginForm from './components/LoginForm.vue';

const routes = [
  { path: '/students', component: StudentsPage },
  { path: '/teachers', component: TeachersPage },
  { path: '/courses', component: CoursesPage },
  { path: '/login', component: LoginForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
