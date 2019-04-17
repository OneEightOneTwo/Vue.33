<template>
    <div class="home">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <Xfooter />
    </div>
</template>

<script>
import Xfooter from '../components/Xfooter.vue'
export default {
  name: 'app',
  components: {
    Xfooter
  }
  
}
</script>
<style>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
    flex: 1;
}
</style>


