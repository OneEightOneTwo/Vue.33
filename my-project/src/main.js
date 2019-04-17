import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import axios from "axios"  //全局
import router from "./router.js";
// import store from "./store.js";
import "./assets/icon/iconfont.css";
import 'weui';
import "./rem.js";
//vue继承jquery的方法
Vue.prototype.$ = $;
//等同Vue.set("$axios", axios);
Vue.prototype.$axios = axios;
//发布的时候，代码错误不提醒
Vue.config.productionTip = false

new Vue({
  // 挂载路由实例
  router,
  // 配置状态管理
  // 渲染App组件
  render: h => h(App),
}).$mount('#app')