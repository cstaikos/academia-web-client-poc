import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NewUser from '../views/NewUser.vue'
import NewManuscript from '../views/NewManuscript.vue'
import ManuscriptDetail from '../views/ManuscriptDetail.vue'
import ManuscriptEdit from '../views/ManuscriptEdit.vue'


Vue.use(Router)

export default new Router({
      mode: 'history',
      routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/users/new',
        name: 'new-user',
        component: NewUser
      },
      {
        path: '/manuscripts/new',
        name: 'new-manuscript',
        component: NewManuscript
      },
      {
        path: '/manuscripts/:manuscriptId',
        name: 'manuscript-detail',
        component: ManuscriptDetail
      },
      {
        path: '/manuscripts/:manuscriptId/edit',
        name: 'manuscript-edit',
        component: ManuscriptEdit
      },
  ]
})
