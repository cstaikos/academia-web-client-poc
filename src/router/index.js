import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import NewManuscript from '../views/NewManuscript.vue'


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
        path: '/manuscripts/new',
        name: 'new-manuscript',
        component: NewManuscript
      }
  ]
})
