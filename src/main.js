import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import ECharts from 'vue-echarts';

Vue.config.productionTip = false;
Vue.component('v-chart',ECharts);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
