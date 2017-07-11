// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Loadmore } from 'mint-ui';

import Mint from 'mint-ui';
Vue.use(Mint);
import { Cell, Checklist } from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

Vue.config.productionTip = false

Vue.component(Loadmore.name, Loadmore);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
