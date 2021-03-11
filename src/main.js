import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus = new Vue();
//安装toast插件，自定义插件
Vue.use(toast)
//解决移动端点击事件的300毫秒延迟
FastClick.attach(document.body)
//安装图片懒加载
Vue.use(VueLazyload, {
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
