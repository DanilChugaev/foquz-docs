import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/index.vue';
import Docs from './pages/docs.vue';
import UI from './pages/ui.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/docs', component: Docs },
  { path: '/ui', component: UI },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
