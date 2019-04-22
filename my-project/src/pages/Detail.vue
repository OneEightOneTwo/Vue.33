<template>
  <div class="detail">
    <div class="d_head">
        <div class="h_left">
          <i class="d_back iconfont icon-fanhui1" @click="goback()"></i>
          <span class="username" v-text="user_detail.user_name"></span>
        </div>
        <div class="h_right">
          <span class="more">
              <i class="dot"></i>
              <i class="dot"></i>
              <i class="dot"></i>
          </span>
        </div>
    </div>
    <div class="d_main">
        <div class="dmain_head">
          <div class="dmh_top">
            <div class="dmh_headphoto" @click="showGallery(user_detail.author_headphoto)">
              <img :src="user_detail.author_headphoto" alt="">
            </div>
            <div class="dmh_topright">
              <div class="dmh_text">
                  <div class="dmh_textbox">
                    <p class="dmh_num" v-text="user_detail.fans"></p>
                    <p class="dmh_title">粉丝</p> 
                  </div>
                  <span class="line"></span>
                  <div class="dmh_textbox">
                    <p class="dmh_num" v-text="user_detail.user_follow"></p>
                    <p class="dmh_title">关注</p> 
                  </div>
                  <span class="line"></span>
                  <div class="dmh_textbox">
                    <p class="dmh_num" v-text="user_detail.user_getlike"></p>
                    <p class="dmh_title">获赞</p> 
                  </div>
              </div>
              <div class="dmh_notice" v-if="user_detail.followed == 0" @click="toggle()">
                <i class="jiahao iconfont icon-jiahao"></i>
                         关注
              </div>
              <div class="dmh_hasnotice" v-if="user_detail.followed == 1" @click="toggle()">
                        已关注
              </div>
            </div>
          </div>
          <div class="dmh_main">
            <span class="userage" v-text="user_detail.user_age"></span>
            <span class="constellation" v-text="user_detail.constellation"></span>
          </div>
          <div class="dmh_bottom">
            <span class="dis" v-text="user_detail.user_distance"></span>,
            <span class="activetime" v-text="user_detail.last_active"></span>前活跃
            <span class="myphoto">个人相册 <span class="photonum" v-text="user_detail.myphoto_num"></span></span>
          </div>
        </div>
        <ul class="notice">
            <li 
            v-for="(t,index) in not_data"
            :key="index"
            
            >
                <div class="user_head">
                    <span class="hphoto" @click="showGallery(t.user_headphoto)">
                        <img :src="t.user_headphoto" alt="" 
                        
                        >
                    </span>
                </div>
                <div class="user_main">
                    <p class="user_name" v-text="t.user_name"></p>
                    <p class="user_age">
                        <span class="user_sexage">
                           <span class="sex" v-text="t.user_sex"></span>
                           <span>&nbsp;</span>
                           <span class="age" v-text="t.user_age"></span>
                        </span>
                    </p>
                    <p class="user_say" v-text="t.user_say"></p>
                    <div class="user_photo">
                        <span class="user_img" v-for="(t,index) in t.user_showimg" :key="index" @click.stop="showGallery(t)">
                            <img :src="t" alt=""
                            >
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
                            <i class="iconfont icon-xinxi1"
                               
                            ></i>
                        </span>
                        <span class="replynum" v-text="t.replynum"></span>
                        <span class="more">
                            <i class="dot"></i>
                            <i class="dot"></i>
                            <i class="dot"></i>
                        </span>
                    </div>
                </div>
            </li>
            
        </ul>
        <Xgallery/>
    </div>
  </div>
</template>
<style scoped>
*{
  margin: 0;padding: 0;
  box-sizing: border-box;
}
.detail{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 501;
  background: white;
}
.d_head{
  padding-top: .925926rem;
  width: 100%;
  height: 2.388889rem;
  border-bottom:.027778rem #eaeaea solid;
  display: flex;
}
.h_left{
  width: 50%;
  display: flex;
  align-items: center;
}
.h_left .d_back{
  font-size: .444444rem;
  color: #f45746;
  font-weight: 600;
  margin-left: .537037rem;
}
.h_left .username{
  font-size: .509259rem;
  color: #1f1f1f;
  font-weight: 550;
  margin-left: 1.046296rem;
}
.h_right{
  width: 50%;
  display: flex;
  align-self: center;
}
.h_right .more{
    flex: 1;
    display: flex;
    flex-direction: column;
    height: .481481rem;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: .731481rem;
}
.dot{
    width: .092593rem;
    height:.092593rem;
    background: #757575;
    border-radius: 50%;
}
.d_main{
  flex: 1;
  overflow: auto;
}
.dmain_head{
  width: 100%;
  height: 4.111111rem;
  border-bottom: .018519rem #ececec solid;
}
.dmh_top{
  height: 2.694444rem;
  width: 100%;
  display: flex;
}
.dmh_headphoto{
  width:2.277778rem;
  height:2.277778rem;
  background: red;
  border-radius: 50%;
  margin-top: .416667rem;
  margin-left: .388889rem;
  overflow: hidden;
}
.dmh_headphoto img{
  width:2.277778rem;
  height:2.277778rem;
}
.dmh_topright{
  width: 6.694444rem;
  height: 2.694444rem;
  margin-left: .305556rem;
}
.dmh_topright .dmh_text{
  width: 100%;
  height: 1.777778rem;
}
.dmh_topright .dmh_notice{
  height: .916667rem;
  width: 100%;
  line-height: .916667rem;
  text-align: center;
  border-radius: .138889rem;
  font-size: .453704rem;
  color: white;
  background: linear-gradient(to right,#ff3e4d, #ff8341);
}
.dmh_topright .dmh_hasnotice{
  height: .916667rem;
  width: 100%;
  line-height: .916667rem;
  text-align: center;
  border-radius: .138889rem;
  font-size: .453704rem;
  color: #9e9e9e;
  border: .018519rem #9f9f9f solid;
}
.dmh_topright .dmh_text{
  display: flex;
  height: 1.777778rem;
}
.dmh_topright .dmh_text .dmh_textbox{
   height: 100%;
   width: 2.212963rem;
   text-align: center;
}
.dmh_num{
  margin-top: .490741rem;
  line-height: .37037rem;
  font-size: .37037rem;
  font-weight: 550;
}
.dmh_title{
  margin-top: .231481rem;
  line-height: .37037rem;
  font-size: .388889rem;
  color: #979797;
}
.dmh_topright .dmh_text .line{
  width: .018519rem;
  height: .416667rem;
  background: #9e9e9e;
  margin-top: .564815rem;
}
.dmh_topright .dmh_notice .jiahao{
  font-size: .259259rem;
  font-weight: 600;
}

.dmh_main{
  width: 100%;
  height: .925926rem;
  line-height: .925926rem;
}
.dmh_main .userage{
  font-size: .268519rem;
  color: #ea5688;
  margin-left: .731481rem;
}
.dmh_main .constellation{
  font-size: .333333rem;
  color: #161616;
  margin-left: .138889rem;
}
.dmh_bottom{
  padding-left: .342593rem;
  width: 100%;
  height: .333333rem;
  line-height: .333333rem;
  color: #a3a3a3;
  font-size: .314815rem;
}
.dmh_bottom .myphoto{
  margin-left: 5.185185rem;
}
</style>
<script>
// 预览图
import Xgallery from "../components/Xgallery.vue";
import state from "../observable.js";
// import request from "../request.js";
export default {
  data(){
        return{
            user_detail:{
                    user_id:'01',
                    author_headphoto:'',
                    followed:1,  //我是否已关注
                    fans:'17',
                    user_follow:'0',
                    user_getlike:'31',
                    user_distance:'7km',
                    last_active:'36分',
                    myphoto_num:'4',
                    user_name:'菜菜姐姐',
                    user_age:'75',
                    constellation:'牡羊座'
                    },
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
                    {   id:'02',
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
                    }
            ]
        }
    },
  components: {
    Xgallery
  },
  methods:{
    //预览图片
        showGallery(src){
            this.state.isgallery.src = src;
            this.state.isgallery.bool = true;
        },
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
        //返回
        goback(){
          this.$router.go(-1);
        },
        //点击关注
        toggle(){
            console.log(this.$router)
            if(this.user_detail.followed == 0){
                this.user_detail.followed =  1;
                //发送请求  更改follow的值
            }else{
                this.user_detail.followed =  0;
                //发送请求  更改follow的值
            }
        }
  },
  computed: { //用这个来拿公有数据
    state() {
      return state;
    }
  },
  async mounted() {
    let id = this.$router.history.current.params.id;
    console.log(id)
  }


  // async mounted() {
  //   let id = this.$router.history.current.params.id;
  //   // console.log(id)
  //   let { data } = await request.get(`https://cnodejs.org/api/v1/topic/${id}`, {
  //       // 页码
        
  //     });
  //   this.article = data.data;
  //   // console.log(this.article)
  // }
  
  
};
</script>

