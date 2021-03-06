import Vue from "vue";
import VueRouter from "vue-router";
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter);

// // // 详情页
import Detail from "./pages/Detail.vue";
// // // 首页
import Home from "./pages/Home.vue";
// 首页下的嵌套组件
import Wechat from "./pages/Home/Wechat.vue";
import Discover from "./pages/Home/Discover.vue";
import Contact from "./pages/Home/Contact.vue";
import Mine from "./pages/Home/Mine.vue";

//Wechat下的嵌套组件
import WechatNearby from "./components/WechatNearby.vue";
import WechatChakan from "./components/WechatChakan.vue";

//发现下的嵌套组件
import Notice from "./pages/Home/discover/Notice.vue";
import Close from "./pages/Home/discover/Close.vue";

// //设置
import Setting from "./pages/Setting.vue";

// 定义路由
<<<<<<< HEAD
const routes = [
  {
    path: "/home",
    component: Home,
    name: "home",
    children: [
      { path: "wechat", component: Wechat, name: "wechat" },
      { path: "contact", component: Contact, name: "contact" },
      {
        path: "discover",
        component: Discover,
        name: "discover",
        redirect: "/home/discover/notice", //定向到关注
        children: [
          {
            path: "notice",
            component: Notice,
            name: "notice",
            children: [
              {
                path: "detail/:id",
                component: Detail,
                name: "detail"
              }
            ]
          }, //关注
          {
            path: "close",
            component: Close,
            name: "close",
            children: [
              {
                path: "detail/:id",
                component: Detail,
                name: "detail2"
              }
            ]
          } //附近
          // { path: "/home/discover", redirect: "notice" }
        ]
      },
      {
        path: "mine",
        component: Mine,
        name: "mine",
        children: [
          {
            path: "setting",
            component: Setting,
            name: "setting"
          }
        ]
      }
    ]
  },
  //设置默认重定向
  { path: "/", redirect: "/home/wechat" }
]; 
=======
const routes = [{
  path: "/home",
  component: Home,
  name: "home",
  children: [{
    path: "wechat", component: Wechat, name: "wechat", redirect: "/home/wechat/moren",
    children: [
      { path: "moren", component: WechatNearby, name: "moren" },
      {
        path: "/home/wechat/moren/chakan/:gid", component: WechatChakan, name: "chakan",
      }]
  }, { path: "contact", component: Contact, name: "contact" }, {
    path: "discover",
    component: Discover,
    name: "discover",
    redirect: "/home/discover/notice",  //定向到关注
    children: [{ path: "notice", component: Notice, name: "notice" }, //关注 
    { path: "close", component: Close, name: "close" },    //附近
      // { path: "/home/discover", redirect: "notice" }
    ]
  }, { path: "mine", component: Mine, name: "mine" }
  ]
},
{ path: "/detail/:id", component: Detail, name: "detail" },
{ path: "/setting", component: Setting, name: "setting" },
//设置默认重定向 
{ path: "/", redirect: "/home/wechat" }
];
>>>>>>> 0db27988c9a2efe625f9cdc39755ae1c2a4568be
// 实例化路由
const router = new VueRouter({
  routes
});

// 暴露路由对象，为后续挂载容器做准备
export default router; 
