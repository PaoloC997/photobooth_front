import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

// Aseguramos que Router esté disponible globalmente
Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/gallery',
    component: () => import('./components/Gallery.vue')  // Lazy loading de la componente
  }
];

// Exportamos la instancia de Router
export default new Router({
  routes
});


