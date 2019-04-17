<template>
  <div v-show="state.isgallery.bool" class="weui-gallery" style="display: block">
    <span class="weui-gallery__img" :style="{
        'backgroundImage': `url(${src})`
    }">
        <i class="galleryclose iconfont icon-quxiao" @click="hideGallery">
            
        </i>
    </span>
    <!-- <div @click="hideGallery" class="weui-gallery__opr">
      <a href="javascript:" class="weui-gallery__del">
        <i class="weui-icon-delete weui-icon_gallery-delete">
            
        </i>
      </a>
    </div> -->
  </div>
</template>
<script>
import state from "../observable.js";
import img from "../assets/400 X 400.jpg"
export default {
  data() {
    return {
        src:"https://avatars2.githubusercontent.com/u/2081487?v=4&s=120"
    };
  },
  created() {
    // 监听Xpanel传过来的事件
    //   this.src = state.isgallery.src;
    //   this.bool = state.isgallery.bool;
    //   console.log(state);
  },
  methods: {
    //   隐藏预览图片
    hideGallery() {
      state.isgallery.bool = false;
    }
  },
  computed: { //用这个来拿公有数据
    state() {
      return state;
    }
  }
  
  

};
</script>
<style scoped>
.weui-gallery .weui-gallery__img{
    bottom: 0;
}
.galleryclose{
    position: absolute;
    color: white;
    font-size: .740741rem;
    top: .185185rem;
    right: .277778rem;
    text-align: center;
    line-height: .925926rem;
}
</style>
