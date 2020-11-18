import Vue from 'vue';
import './plugins/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';


// 引入echarts
import echarts from 'echarts'

import router from './router'
import store from './store'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
