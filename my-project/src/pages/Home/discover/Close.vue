<template>
    <div class="discover">
        <ul class="notice">
            <li 
            v-for="(t,index) in not_data"
            :key="index"
            :data-id="t.user_id"
            >
                <div class="user_head">
                    <span class="hphoto" @click="showGallery(t.user_headphoto)">
                        <img :src="t.user_headphoto" alt=""
                        >
                    </span>
                </div>
                <div class="user_main" @click="gotodetail(t.user_id)">
                    <p class="user_name" v-text="t.user_name"></p>
                    <p class="user_age">
                        <span class="user_sexage">
                           <span class="sex" v-text="t.user_sex">♀</span>
                           <span>&nbsp;</span>
                           <span class="age" v-text="t.user_age">30</span>
                        </span>
                    </p>
                    <p class="user_say" v-text="t.user_say"></p>
                    <div class="user_photo">
                        <span class="user_img" v-for="(t,index) in t.user_showimg" :key="index" @click.stop="showGallery(t)">
                            <img :src="t" alt="">
                        </span>    
                    </div>
                    <p class="time_dis">
                        <span class="time" v-text="t.pushtime">
                            
                        </span>
                        ·
                        <span class="distance" v-text="t.distance">
                            
                        </span>
                    </p>
                    <div class="m_bottom">
                        <span class="like">
                            <i class="iconfont icon-aixin1"
                                @click.stop="like(index)"
                                :class="{
                                    'changecolor':t.haslike == 1
                                }"
                            ></i>
                        </span>
                        <span class="likenum" v-text="t.likenum"></span>
                        <span class="reply">
                            <i class="iconfont icon-xinxi1"></i>
                        </span>
                        <span class="replynum" v-text="t.replynum"></span>
                        <span class="more">
                            <i class="dot"></i>
                            <i class="dot"></i>
                            <i class="dot"></i>
                        </span>
                    </div>
                </div>
                <div class="attention"
                v-if="t.follow == 0"
                @click="toggle(index)"
                >
                    关注
                </div>
                <div class="noattention"
                v-if="t.follow == 1"
                @click="toggle(index)"
                >
                已关注
                </div>
            </li>
            
        </ul>
        <Xgallery/>
        <cube-view></cube-view>
    </div>
</template>
<style>
.attention{
    position: absolute;
    right: .333333rem;
    top: .5rem;
    padding: 0 .37037rem;
    height: .666667rem;
    border: .027778rem #fe4910 solid;
    border-radius: 6px;
    text-align: center;
    line-height: .666667rem;
    font-size: .361111rem;
    color: #fe3a00;
    font-weight: 600;
}
.noattention{
    position: absolute;
    right: .333333rem;
    top: .5rem;
    padding: 0 .37037rem;
    height: .666667rem;
    border: .027778rem #9f9f9f solid;
    border-radius: 6px;
    text-align: center;
    line-height: .666667rem;
    font-size: .361111rem;
    color: #9e9e9e;
    font-weight: 600;
}
</style>
<script>
// 预览图
import Xgallery from "../../../components/Xgallery.vue";
import state from "../../../observable.js";
import CubeView from '../../../components/cube-view.vue'
export default {
    data(){
        return{
            not_data:[
                    {   id:'01',
                        user_id:'01',
                        user_headphoto:'../../../assets/400 X 400.jpg',
                        user_name:'茂茂',
                        user_sex:'♀',
                        user_age:'30',
                        user_say:'新动态 , 点个赞吧',
                        user_showimg:['../../../assets/bigimgblack2.jpg','../../../assets/bigimgblack2.jpg'],
                        pushtime:'21分钟前',
                        distance:'5.3km',
                        haslike: 1, //是否已点赞
                        likenum:'5',
                        replynum:'1',
                        follow:0
                    },
                    {   id:'01',
                        user_id:'01',
                        user_headphoto:'../../../assets/400 X 400.jpg',
                        user_name:'茂茂',
                        user_sex:'♀',
                        user_age:'30',
                        user_say:'新动态 , 点个赞吧',
                        user_showimg:['../../../assets/bigimgblack2.jpg','../../../assets/bigimgblack2.jpg'],
                        pushtime:'21分钟前',
                        distance:'5.3km',
                        haslike: 0, //是否已点赞
                        likenum:'5',
                        replynum:'1',
                        follow:0
                    },
                    {   id:'01',
                        user_id:'01',
                        user_headphoto:'../../../assets/400 X 400.jpg',
                        user_name:'茂茂',
                        user_sex:'♀',
                        user_age:'30',
                        user_say:'新动态 , 点个赞吧',
                        user_showimg:['../../../assets/bigimgblack2.jpg','../../../assets/bigimgblack2.jpg'],
                        pushtime:'21分钟前',
                        distance:'5.3km',
                        haslike: 1, //是否已点赞
                        likenum:'5',
                        replynum:'1',
                        follow:0
                    },

            ]
            
        }
    },
    methods:{
        //点击关注
        toggle(index){
            if(this.not_data[index].follow == 0){
                this.not_data[index].follow = 1;
                //发送请求  更改follow的值
            }else{
                this.not_data[index].follow = 0;
                //发送请求  更改follow的值
            }
        },
        //预览图片
        showGallery(src){
            this.state.isgallery.src = src;
            this.state.isgallery.bool = true;
        },
        //点击爱心
        like(index){
            // console.log(this.$refs.likecolor[index].offsetHeight)
            if(this.not_data[index].haslike == 1){
                this.not_data[index].haslike = 0;
                this.not_data[index].likenum --;
            }else{
                this.not_data[index].haslike = 1;
                this.not_data[index].likenum ++;
            }
        },
        gotodetail(id){
            // console.log(111)
            this.$router.push({ name: "detail2", params: { id } });
        }
    
    },
    components: {
    Xgallery,
    CubeView
    },
    computed: { //用这个来拿公有数据
    state() {
      return state;
    }
  }
}
</script>
