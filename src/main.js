// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './store'
import VueResource from 'vue-resource';
import Vuex from 'vuex';
//日期格式化
import moment from 'moment';
//图片缩略图
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

Vue.use(VueResource);
Vue.use(Vuex);
const store = new Vuex.Store(stores);
// 设置 resource 请求根路径
Vue.http.options.root = 'https://www.liweijia.site/vue/api/';
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false;

// 导入 MUI 的样式
import '../static/mui/css/mui.min.css'
// 导入扩展图标样式
import '../static/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件  
/* import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  Lazyload
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload); */

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css'


Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(new Date(dataStr * 1000)).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
