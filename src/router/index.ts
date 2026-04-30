import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import BlogsPage from '../pages/BlogsPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: AboutPage, meta: { title: 'About' } },
  { path: '/projects', name: 'projects', component: ProjectsPage, meta: { title: 'Projects' } },
  { path: '/blogs', name: 'blogs', component: BlogsPage, meta: { title: 'Blogs' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

router.afterEach((to) => {
  document.title = `${String(to.meta.title ?? 'Home')} — Tran Hoang Hai Portfolio`;
});

export default router;
