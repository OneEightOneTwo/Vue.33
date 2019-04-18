<template>
    <div class="main">
        <div class="set_head">
          <i class="iconfont icon-fanhui1" @click="gotoback()"></i>
          <span class="setting">设置</span>
        </div>
        <div class="setbox">
            <div class="showme">向我显示</div>
        </div>
        <div class="setbox2">
          <div class="setleft">
            <span class="place">位置</span>
            <span class="vip">VIP</span>
          </div>
          <div class="setright">
            <span class="settext">更改我的位置</span>
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="setrange">
          <div class="range">
            <span class="rangetitle">范围</span>
            <span class="rangedis" v-text="distance + 'km'"></span>
          </div>
          <div class="rangeline" ref="rangeline" @mousedown="linedown"  @touchstart="linedown"> 
            <div class="rangedot" 
            @mousedown.stop="down"  @touchstart.stop="down" 
            @mousemove.stop="move"  @touchmove.stop="move"  
            @mouseup.stop="end"  @touchend.stop="end"
            ref="rangedot"
            >

            </div>
            <div class="rangred" ref="rangred" :style="{width:xPum + 'px'}"></div>
          </div>
          <div class="rangebottom">
            <span class="autorang">
              自动扩大范围
              <i class="iconfont icon-wenti2"></i>
            </span>
            <van-switch v-model="checked" size=".462963rem"
            active-color="red"
            inactive-color="green"/>
          </div>
        </div>
        <div class="setrange2">
          <div class="range">
            <span class="rangetitle">年龄</span>
            <span class="rangedis"><span class="minage" v-text="minage"></span> - <span class="maxage" v-text="maxage">54</span></span>
          </div>
          <div class="rangeline" style="margin-top:1rem" ref="age_rangeline" @mousedown="age_linedown"  @touchstart="age_linedown"> 
              <div class="rangedot" 
              @mousedown.stop="down"  @touchstart.stop="down" 
              @mousemove.stop="movemin"  @touchmove.stop="movemin"  
              @mouseup.stop="end"  @touchend.stop="end"
              ref="min_rangedot"
              >

              </div>

              <div class="rangred" ref="age_rangred" :style="{width:agered_width + 'px',left:agered_left + 'px'}"></div>

              <div class="rangedot" 
              @mousedown.stop="down"  @touchstart.stop="down" 
              @mousemove.stop="movemax"  @touchmove.stop="movemax"  
              @mouseup.stop="end"  @touchend.stop="end"
              ref="max_rangedot" 
              >

              </div>
          </div>
        </div>
        <div class="setbox2">
          <span class="settext">显示性别</span>
          <div class="sexchose">
            <span class="sextype" :class="{'sexcolor':sexindex == index}"
            v-for="(t,index) in sextype" 
            :key="index"
            v-text="t"
            @click="chosesex(index)"
            >
            </span>
          </div>
        </div>
        <div class="setbox">
            <div class="showme">应用设置</div>
        </div>
        <div class="setbox2">
          <div class="setleft">
            <span class="settext">账号与安全</span>
          </div>
          <div class="setright">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
    </div>
</template>
<style scoped>
.main{
  overflow: auto;
}
*{margin: 0;padding: 0;box-sizing: border-box}
.main{
  height: 100%;
  /* font-size: .462963rem; */
}
.set_head{
  width: 100%;
  height: 2.388889rem;
  border-bottom: .027778rem #ebebeb solid;
  padding-top: 1.37963rem;
  padding-left: .537037rem;
  display: flex;
}
.icon-fanhui1{
  font-weight: .444444rem;
  width: .444444rem;;
  height: .444444rem;
  line-height: .444444rem;
  color: #f55b43;
}
.setting{
  font-size: .5rem;
  height: .5rem;
  line-height: .5rem;
  margin-left: 1.037037rem;
}
.setbox{
  overflow: hidden;
  width: 100%;
  height: 2.166667rem;
  border-bottom: .027778rem #ebebeb solid;
}
.setbox2{
  width: 100%;
  height: 2.166667rem;
  border-bottom: .027778rem #ebebeb solid;
  display: flex;
  align-items: center;
  padding-left: .453704rem;
  justify-content: space-between;
}
.showme{
  margin-top: 1.074074rem;
  margin-left: .490741rem;
  height: .407407rem;
  font-size: .407407rem;
  color: #fe3a00;
  line-height:  .407407rem;
}
.setleft{
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}
.setright{
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.place{
  font-size: .453704rem;
}
.vip{
    width: .944444rem;
    height: .444444rem;
    border-radius: .324074rem;
    text-align: center;
    line-height: .444444rem;
    font-size: .324074rem;
    color: white;
    font-weight: 550;
    margin-left: .166667rem;
    background: linear-gradient(to right,#ff3e4d, #ff8341);
}
.settext{
  font-size: .425926rem;
  margin-right: .444444rem;
}
.icon-you{
  font-size: .333333rem;
  color: #d7d7d7;
  margin-right: .657407rem;
}
.setrange{
  width: 100%;
  height: 4.5rem;
  border-bottom: .027778rem #ebebeb solid;
  padding: .740741rem 0 0 .472222rem;
}
.setrange2{
  width: 100%;
  height: 3.333333rem;
  border-bottom: .027778rem #ebebeb solid;
  padding: .740741rem 0 0 .472222rem;
}
.range{
  height: .462963rem;
  line-height: .462963rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.rangetitle{
  font-size: .462963rem;
}
.rangedis{
  font-size: .351852rem;
  margin-right: .472222rem;
  font-weight: 550;
}
.rangeline{
  position: relative;
  margin-top: .712963rem;
  width: 9.111111rem;  
  height: .101852rem;
  background: #cfcfcf;

}
.rangeline .rangedot{
  position: absolute;
  top: -0.115741rem;
  left: 0;
  width: .333333rem;
  height:.333333rem;
  background: #fe3a00;
  border-radius: 50%;
}
.rangeline .rangred{
  position: absolute;
  width: 0;
  height: .101852rem;
  top: 0;
  left: 0;
  background:  #fe3a00;
}
.rangebottom{
  display: flex;
  height: .601852rem;
  line-height: .601852rem;
  font-size: .462963rem;
  margin-top: 1.083333rem;
  justify-content: space-between;
  padding-right: .37037rem;
}
.icon-wenti2{
  color: #fe3a00;
  
}
.settext{
  font-size: .462963rem;
  line-height: .462963rem;
}
.sexchose{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.sextype{
  width: 1.240741rem;
  height: .842593rem;
  font-size: .444444rem;
  line-height: .842593rem;
  text-align: center;
  margin-left: .240741rem;
}
.sextype.sexcolor{
  color: white;
  background: #f55b43;
}
</style>
<script>
// import bus from "../bus.js";
export default {
  data(){
    return{
      checked: true,
      sextype:[
        "男生",
        "女生",
        "不限"
      ],
      sexindex:1,
      drag:false,
      position: {
            x: 0,
            y: 0
        },
      nx: '', //该节点移动x轴的距离
      ny: '', 
      dx: '', //距离父级元素的距离
      dy: '', 
      xPum: '', //拖动的距离
      yPum: '',
      distance:50,
      xmin:'',
      xmax:'',
      agered_left:'',
      agered_width:'',
      minage:'25',
      maxage:'41'
    }
  },
  computed: {
    // 计算属性的 getter
    
  },
  mounted: function () {
      this.$nextTick(function () {
        let scale2 =  this.distance / 100;
        this.xPum = (this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth) * scale2;
        this.$refs.rangedot.style.left = this.xPum + "px";
        this.$refs.rangred.style.width = this.xPum + "px";
        let minscale = (this.minage - 16) / 34;
        let maxscale = (this.maxage - 16) / 34;
        this.xmin = (this.$refs.age_rangeline.clientWidth - this.$refs.min_rangedot.clientWidth) * minscale;
        this.xmax = (this.$refs.age_rangeline.clientWidth - this.$refs.max_rangedot.clientWidth) * maxscale;
        this.$refs.min_rangedot.style.left = this.xmin + "px";
        this.$refs.max_rangedot.style.left = this.xmax + "px";
        this.agered_left = this.xmin + this.$refs.min_rangedot.clientWidth;
        this.agered_width = this.xmax - this.$refs.min_rangedot.clientWidth - this.xmin;
        if(this.agered_width <= 0){
          this.agered_width = 0 ;
        }
        
      })
  },
  methods:{
    chosesex(index){
      this.sexindex = index;
    },
    linedown(){
      var touch;
      // this.drag = true;
      // console.log(this.$refs.rangedot);
      // this.$refs.rangedot.mousemove();
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        this.xPum = touch.clientX - this.$refs.rangeline.offsetLeft - this.$refs.rangedot.clientWidth/2;
        if(this.xPum <=0){
          this.xPum = 0;
        }else if(this.xPum >= this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth){
          this.xPum = this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth;
        }
        this.$refs.rangedot.style.left = this.xPum + "px";
        // this.$refs.rangred.style.width = line_left + "px";
        let scale = this.xPum / (this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth);
        let dis = parseInt(100 * scale);
        this.distance = dis;
    },
    age_linedown(){
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        let ageline = touch.clientX - this.$refs.rangeline.offsetLeft; //点击获取距离最左边的范围
        let line_width = this.$refs.age_rangeline.clientWidth; //最大宽度
        let dot_width = this.$refs.max_rangedot.clientWidth; //点的宽度
        if(ageline >= this.xmax + dot_width){
          if(ageline >= line_width - dot_width){
            this.xmax = line_width - dot_width;
            this.$refs.max_rangedot.style.left = this.xmax + "px";
          }else{
            this.xmax = ageline - dot_width / 2;
            this.$refs.max_rangedot.style.left = this.xmax + "px";
          }

        }else if(ageline <= this.xmin + dot_width){
          if(ageline <= 0){
            ageline = 0;
          }
          this.xmin = ageline - dot_width / 2;
          this.$refs.min_rangedot.style.left = this.xmin + "px";
        }else{
          let min_dis = ageline - this.xmin - dot_width; // 点击中间距离最小值点的距离
          min_dis = min_dis <= 0 ? 0 : min_dis;
          let max_dis = this.xmax - ageline ; // 点击中间距离最大值点的距离
          max_dis = max_dis <= 0 ? 0 : max_dis;
          if(min_dis < max_dis){
            //距离最小值最近
            this.xmin = ageline - dot_width / 2;
            this.$refs.min_rangedot.style.left = this.xmin + 'px';
          }else{
            this.xmax = ageline - dot_width / 2;
            this.$refs.max_rangedot.style.left = this.xmax + 'px';
          }
        }


        //中间的宽度
        this.agered_left = this.xmin + dot_width;
        this.agered_width = this.xmax - dot_width - this.xmin;
        if(this.agered_width <= 0){
          this.agered_width = 0 ;
        }
        let minscale = this.xmin / (line_width - dot_width);
        let minage = parseInt(34 * minscale) + 16;
        this.minage = minage;
        let maxscale = this.xmax / (line_width - dot_width);
        let maxage = parseInt(34 * maxscale) + 16;
        this.maxage = maxage;

    },
    down(){
        this.drag = true;
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        this.position.x = touch.clientX;  //一开始鼠标的位置
        this.position.y = touch.clientY;
        this.dx = event.path[0].offsetLeft; //距离父级元素的距离
        // console.log(this.dx)
        // console.log(event);
    },
    move(){
        if(this.drag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.nx = touch.clientX - this.position.x; //该节点移动x轴的距离
            this.ny = touch.clientY - this.position.y; 
            this.xPum = this.dx+this.nx; 
            if(this.xPum <=0){
              this.xPum = 0;
            }else if(this.xPum >= this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth){
              this.xPum = this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth;
            }
            // this.yPum = this.dy+this.ny;
            this.$refs.rangedot.style.left = this.xPum + "px";
            let scale = this.xPum / (this.$refs.rangeline.clientWidth - this.$refs.rangedot.clientWidth);
            let dis = parseInt(100 * scale);
            this.distance = dis;
            // this.$refs.box.style.top = this.yPum +"px";
            //阻止页面的滑动默认事件
            document.addEventListener('touchmove',{ passive: true });
        }
    },
    movemin(){
      if(this.drag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.nx = touch.clientX - this.position.x; //该节点移动x轴的距离
            this.ny = touch.clientY - this.position.y; 
            this.xmin= this.dx + this.nx; 
            if(this.xmin <= 0){
              this.xmin = 0;
            }else if(this.xmin >= this.$refs.max_rangedot.offsetLeft){
              this.xmin = this.$refs.max_rangedot.offsetLeft;
            }
            // this.yPum = this.dy+this.ny;
            this.$refs.max_rangedot.style.zIndex = 0;
            this.$refs.min_rangedot.style.zIndex = 1;
            this.$refs.min_rangedot.style.left = this.xmin + "px";
            this.agered_left = this.xmin + this.$refs.min_rangedot.clientWidth;
            this.agered_width = this.xmax - this.$refs.min_rangedot.clientWidth - this.xmin;
            if(this.agered_width <= 0){
              this.agered_width = 0 ;
            }
            let scale = this.xmin / (this.$refs.age_rangeline.clientWidth - this.$refs.min_rangedot.clientWidth);
            let age = parseInt(34 * scale) + 16;
            this.minage = age;
            // this.$refs.box.style.top = this.yPum +"px";
            //阻止页面的滑动默认事件
            document.addEventListener('touchmove',{ passive: true });
        }
    },
    movemax(){
      if(this.drag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.nx = touch.clientX - this.position.x; //该节点移动x轴的距离
            this.ny = touch.clientY - this.position.y; 
            this.xmax= this.dx + this.nx; 
            if(this.xmax <= this.$refs.min_rangedot.offsetLeft){
              this.xmax = this.$refs.min_rangedot.offsetLeft ;
            }else if(this.xmax >= this.$refs.age_rangeline.clientWidth - this.$refs.max_rangedot.clientWidth){
              this.xmax = this.$refs.age_rangeline.clientWidth - this.$refs.max_rangedot.clientWidth;
            }
            // this.yPum = this.dy+this.ny;
            this.$refs.max_rangedot.style.zIndex = 1;
            this.$refs.min_rangedot.style.zIndex = 0;
            this.$refs.max_rangedot.style.left = this.xmax + "px";
            this.agered_left = this.xmin + this.$refs.min_rangedot.clientWidth;
            this.agered_width = this.xmax - this.$refs.min_rangedot.clientWidth - this.xmin;
            if(this.agered_width <= 0){
              this.agered_width = 0 ;
            }
            let scale = this.xmax / (this.$refs.age_rangeline.clientWidth - this.$refs.max_rangedot.clientWidth);
            let age = parseInt(34 * scale) + 16;
            this.maxage = age;
            // this.$refs.box.style.top = this.yPum +"px";
            //阻止页面的滑动默认事件
            document.addEventListener('touchmove',{ passive: true });
        }
    },
    //鼠标释放时候的函数
    end(){
    this.drag = false;
    },
    gotoback(){
      this.$router.go(-1);
    }
  },
  components: {
    
  },
  
}
</script>