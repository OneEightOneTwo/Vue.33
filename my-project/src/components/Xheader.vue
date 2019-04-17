<template>
    <header>
      <div class="h_tool"></div>
      <div class="h_text" v-text='state.h_title'></div>
      <div class="h_tool">
        <i class="search iconfont icon-search" @click='toggle()'></i>
        <i class="more iconfont icon-jiahao"></i>
      </div>
    </header>
</template>

<style scoped>
header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: wheat;
  background: green;
  display: flex;
}
.h_tool{
  flex: 1;
  display: flex;
}
.h_tool i{
  width: 50%;
  height: 100%;
}
.h_text{
  flex: 3;
}
</style>
<script>
import state from "../observable.js";
export default {
  data(){
    return{
      
    }
  },
  computed: { //用这个来拿公有数据
    state() {
      return state;
    }
  },
  methods:{
    toggle(){
      this.$router.push({ name: "search" })
    }
  }
};
</script>

