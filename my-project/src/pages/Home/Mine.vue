<template>
        <div class="main">
            <div class="my_head">
                <div class="myh_set">
                    <span @click ="gotoset()">设置</span>
                </div>
                <div class="my_headphoto">
                    <span class="myhead">
                        <img src="" alt="">
                    </span>
                </div>
                <p class="myname">
                    <span v-text="my_data.my_name"></span>, <span v-text="my_data.my_age"></span>
                </p>
                <p class="my_signature" v-html="my_data.my_signature + icon">
                    
                </p>
                <div class="hismessage">
                    <span class="my_hismeg">
                        <i class="iconfont icon-xiaoxitongzhitixinglingshenglingdang "></i>
                        <span class="checkmeg">查看历史信息</span>
                    </span>
                </div>
                <div class="myallmeg">
                    <div class="mymegbox">
                        <p class="megnum" v-text="my_data.my_photonum">0</p>
                        <p class="megtext">相册</p>
                    </div>
                    <span class="mymegline"></span>
                    <div class="mymegbox">
                        <p class="megnum" v-text="my_data.my_fans">0</p>
                        <p class="megtext">粉丝</p>
                    </div>
                    <span class="mymegline"></span>
                    <div class="mymegbox">
                        <p class="megnum" v-text="my_data.my_notice">1</p>
                        <p class="megtext">关注</p>
                    </div>
                </div>
            </div>
            <div class="my_chose">
                <ul class="chose">
                    <li>
                        <div class="c_left">
                        <i class="iconfont icon-huangguan"></i>
                        <span class="tantan">tantan</span>
                        <span class="vip">VIP</span>
                        </div>
                        <div class="c_right">
                            <span class="r_tip">激活特权</span>
                            <i class="iconfont icon-you"></i>
                        </div>
                    </li>
                    <li>
                        <div class="c_left">
                        <i class="iconfont icon-aixin1"></i>
                        <span class="chosetitle">喜欢我的人</span>
                        <span class="likenum">2</span>
                        </div>
                        <div class="c_right">
                            
                        </div>
                    </li>
                    <li>
                        <div class="c_left">
                        <i class="iconfont icon-renzheng"></i>
                        <span class="chosetitle">认证中心</span>
                        
                        </div>
                        <div class="c_right">
                            
                            <i class="iconfont icon-you"></i>
                        </div>
                    </li>
                    <li>
                        <div class="c_left">
                        <i class="iconfont icon-xinfengtianchong"></i>
                        <span class="chosetitle">匿名暗恋表白</span>
                        
                        </div>
                        <div class="c_right">
                            
                            <i class="iconfont icon-you"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <cube-view></cube-view>
        </div>
</template>
<style scoped>
*{
    margin: 0;padding: 0;
    box-sizing: border-box;
}
.main{
    overflow: auto;
}
.my_head{
    width: 100%;
    height: 10.740741rem;
    border-bottom: .018519rem #e6e6e6 solid;
    padding-top: .842593rem;
}
.myh_set{
    width: 100%;
    height: 1.546296rem;
    line-height: 1.546296rem;
    padding-left: .472222rem;
    font-size: .527778rem;
    color: #212121;
}
.my_headphoto{
    width: 100%;
    height: 2.388889rem;
    display: flex;
    justify-content: center;
}
.my_headphoto .myhead{
    width:2.388889rem;
    height: 2.388889rem;
    border-radius: 50%;
    overflow: hidden;
    background: red;
}
.my_headphoto .myhead img{
    width: 100%;
    height:100%;
}
.myname{
    width: 100%;
    height: .518519rem;
    text-align: center;
    line-height: .518519rem;
    font-size: .518519rem;
    color: #212121;
    margin-top: .5rem;
}
.my_signature{
    width: 100%;
    height: .37963rem;
    text-align: center;
    line-height: .37963rem;
    font-size: .37037rem;
    color: #b5b5b5;
    margin-top: .435185rem;
}
.hismessage{
    margin-top: .453704rem;
    width: 100%;
    height: 1.027778rem;
    display: flex;
    justify-content: center;
}
.hismessage .my_hismeg{
    padding-left: .416667rem;
    width: 4.277778rem;
    height: 1.027778rem;
    background: #d8d8d8;
    border-radius: .138889rem;
    font-size: .407407rem;
    color: #fcfcfc;
    line-height:  1.027778rem;
}
.hismessage .my_hismeg .checkmeg{
    margin-left: .351852rem;
}
.myallmeg{
    margin-top: 1.203704rem;
    width: 100%;
    height: 1.435185rem;
    display: flex;
}
.mymegbox{
    text-align: center;
    height: 100%;
    width: 3.314815rem;
}
.megnum{
    font-size: .462963rem;
    height:.37963rem;
    line-height: .37963rem;
    font-weight: 550;
}
.megtext{
    height: .398148rem;
    line-height: .398148rem;
    font-size: .407407rem;
    margin-top: .194444rem;
    color: #9e9e9e;
}
.mymegline{
    margin-top: .25rem;
    width: .018519rem;
    height: .416667rem;
    background: #9e9e9e;
}
.chose{
    display: flex;
    flex-direction: column;
    padding-left: .444444rem;
}
.chose li{
    width: 100%;
    height: 1.666667rem;
    border-bottom:.018519rem #e6e6e6 solid;
    display: flex;
    align-items: center;
}
.chose li .c_left{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
}
.chose li .c_left .tantan{
    font-size: .555556rem;
    color: #ff5726;
    margin-left: .398148rem;
    font-weight: 550;
}
.chose li .c_left .vip{
    width: .944444rem;
    height: .472222rem;
    border-radius: .324074rem;
    text-align: center;
    line-height: .472222rem;
    font-size: .324074rem;
    color: white;
    font-weight: 550;
    margin-left: .166667rem;
    background: linear-gradient(to right,#ff3e4d, #ff8341);
}
.icon-huangguan{
    font-size: .444444rem;
    color: #ff683b;
}
.chose li .c_right{
     width: 50%;
     height: 100%;
    display: flex;
    padding-right: .537037rem;
    justify-content: flex-end;
    align-items: center;
}
.chose li .c_right .r_tip{
    margin-right: .342593rem;
    font-size: .416667rem;
    color: #b3b3b3;
}
.chose li .c_right .icon-you{
    font-size: .333333rem;
    color: #b3b3b3;
}
.icon-aixin1{
    font-size: .462963rem;
    color: red;
}
.icon-renzheng{
    font-size: .462963rem;
    color:#54c7fd;
}
.icon-xinfengtianchong{
    font-size: .462963rem;
    color: #9573fb;
}
.chosetitle{
    font-size: .472222rem;
    margin-left: .444444rem;
    color: #030303;
}
.likenum{
    font-size: .472222rem;
    margin-left: .185185rem;
    color: #030303;
}
</style>
<script>
// import request from "../../request.js";
import CubeView from '../../components/cube-view.vue'
export default {
  data() {
    return {
      my_data:{
        my_name:'草木生',
        my_age:'22',
        my_signature:'',
        my_photonum:0,
        my_fans:0,
        my_notice:1
      },
      icon:'<i class="iconfont icon-bianji" style="color:#75abeb;"></i>'
    };
  },
  created() {
    if(!this.my_data.my_signature){
        this.my_data.my_signature = '用走心的签名打动对的人！点击编辑';
    }
  },
  methods: {
    gotoset(){
        this.$router.push({ name: "setting"});
    }
  },
  components: {
    CubeView
  }
};
</script>