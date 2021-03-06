import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/pages/Frame'
import Home from '@/pages/Home'
import Conversion from '@/pages/Conversion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Frame,
      children: [
        { path: '', component: Home, meta: "首页"},
        { path: '/:conversion(.+-to-.+)',component: Conversion }
      ]
    },

  ]
})
