// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/js/rem.js'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-theme-chalk';
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/style/reset.css'
import '@/common/style/resetElemtnUI.css'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animated)
// 路由跳转
Vue.prototype.$goRoute = function (index, query) {
  this.$router.push({
    path: index,
    query: query
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
