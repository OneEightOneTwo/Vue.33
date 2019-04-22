<template>
<<<<<<< HEAD
  <div class="weui-tabbar" style="height:1.740741rem;position:static;">
=======
  <div class="weui-tabbar" style="height:53px;position:fixed;">
>>>>>>> 0db27988c9a2efe625f9cdc39755ae1c2a4568be
    <a
      @click="toTab(index)"
      v-for="(t,index) in tabbar"
      :key="index"
      href="javascript:;"
      class="weui-tabbar__item"
      :class="{
        'weui-bar__item_on':t.name == routername
      }"
    >
      <span style="display: inline-block;position: relative;">
        <i class="weui-tabbar__icon" :class="t.icon"></i>
      </span>
      <p class="weui-tabbar__label" v-text="t.title"></p>
    </a>
  </div>
</template>
<script>
import state from "../observable.js";
export default {
  data() {
    return {
      tabbar: [
        { title: "探探",name: "wechat",icon:'iconfont icon-yaoyiyao1' },
        { title: "聊天",name: "contact",icon:'iconfont icon-liaotian'},
        { title: "发现",name: "discover",icon:'iconfont icon-faxian1' },
        { title: "我",name: "mine",icon:'iconfont icon-wodedangxuan' }
      ],
      routername:this.$router.history.current.matched[1].name
    }
  },
  methods: {
    // 切换底部选项卡
    toTab(tab) {
      // 获取当前的tab的name值
      let name = this.tabbar[tab].name;
      // 跳路由
      this.$router.push({name});
      this.routername = this.$router.history.current.matched[1].name;
    }
  },
  computed: { //用这个来拿公有数据
    state() {
      return state;
    }
  }
};
</script>
<style>
.weui-tabbar .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon{
  color: black;
}
.weui-tabbar .weui-tabbar__item:nth-child(1).weui-bar__item_on .weui-tabbar__icon{
  color: orangered;
}
.weui-tabbar .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
  color: black;
}
.weui-tabbar .weui-tabbar__item:nth-child(1).weui-bar__item_on .weui-tabbar__label{
  color: orangered;
}
</style>


