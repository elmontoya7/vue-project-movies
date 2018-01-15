import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Movies from '../components/Movies'
import Series from '../components/Series'

export default new Router({
  routes: [
    {
      path: '/', component: Movies
    },
    {
      path: '/tv', component: Series
    }
  ]
})
