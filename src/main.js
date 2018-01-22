// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Home from './pages/Home.vue'
Vue.use(VueRouter)
Vue.use(iView)
Vue.config.productionTip = false



/* eslint-disable no-new */


// 创建路由实例  
new Vue({
  el: '#app',
  router,
  data(){
    return {
      transitionName: 'slide'
    }
  },
  watch:{
    '$route' (to,from){
      const toDepth = to.path.substring(0, to.path.length-2).split('/').length
      const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    }
  }
})
