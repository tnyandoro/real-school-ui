import { createRouter, createWebHistory } from "vue-router";
import Students from "./views/Students.vue";
import Courses from "./views/Courses.vue";
import Teachers from "./views/Teachers.vue";
import AddStudent from "./views/AddStudent.vue";
import StudentDetails from "./views/StudentDetails.vue";
import AddTeacher from "./views/AddTeacher.vue";

import LandingPage from "@/components/LandingPage.vue";
import LoginPage from "@/components/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login/student",
    name: "StudentLogin",
    component: LoginPage,
    props: { userType: "student" },
  },
  {
    path: "/login/teacher",
    name: "TeacherLogin",
    component: LoginPage,
    props: { userType: "teacher" },
  },

  {
    path: "/students",
    name: "Students",
    component: Students,
  },
  {
    path: "/students/:id",
    name: "StudentDetails",
    component: StudentDetails,
    props: true,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: Teachers,
  },
  {
    path: "/students/new",
    name: "AddStudent",
    component: AddStudent,
  },
  {
    path: "/teachers/new",
    name: "AddTeacher",
    component: AddTeacher,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
