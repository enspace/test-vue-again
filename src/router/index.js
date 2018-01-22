import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Favorite from '../pages/Favorite'
import Place from '../pages/Place'
import Mine from '../pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/detail',
      component: Detail
    },{
      path: '/favorite',
      component: Favorite
    },{
      path: '/place',
      component: Place
    },{
      path: '/mine',
      component: Mine
    }
  ]
})
