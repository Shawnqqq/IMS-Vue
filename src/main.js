import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';

import router from './router/index';
import store from './store';

// antDesign-vue
import "ant-design-vue/dist/antd.css";
import Antd from 'ant-design-vue';

Vue.use(Antd);



Vue.config.productionTip = false
Vue.use( CKEditor );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
