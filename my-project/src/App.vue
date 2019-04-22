<template>
  <div id="app">
    <keep-alive>
    <router-view class="Router"></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
  
}
</script>


<style>
*{
  margin: 0;padding: 0;
}
html,body{
    height: 100%;
}
#app{
  height: 100%;
  overflow: hidden;
}

</style>

