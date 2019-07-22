import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/vue-router.js'
import router from '@/router'
import './plugins/ant-design-vue.js'
import './plugins/bootstrap.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
