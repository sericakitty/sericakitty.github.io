const pageHome = () => import('Pages/pageHome.vue')
const pageProjects = () => import('Pages/pageProjects.vue')
const pageMusic = () => import('Pages/pageMusic.vue')
const pageContact = () => import('Pages/pageContact.vue')

const routes = [
  {
    path: '/',
    name: 'pageHome',
    component: pageHome
  },
  {
    path: '/projects',
    name: 'pageProjects',
    component: pageProjects
  },
  {
    path: '/music',
    name: 'pageMusic',
    component: pageMusic
  },
  {
    path: '/contact',
    name: 'pageContact',
    component: pageContact
  },
]

export default routes
