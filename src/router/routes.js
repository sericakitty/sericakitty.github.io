const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('Pages/PageHome.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('Pages/PageProjects.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('Pages/PageMusic.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('Pages/PageContact.vue')
  },
]

export default routes
