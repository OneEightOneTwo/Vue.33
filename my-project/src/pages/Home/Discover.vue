<template>
    <div class="main">
        <header>
            <ul class="h_title">
                <span></span>
                <li 
                v-for="(item,index) in tab" 
                :key="index" 
                v-text="item.title"
                :class="{'active':tab_index == index}"
                @click = "toggle(index)"
                ></li>
            </ul>
            <div class="push">
                <span class="h_push">
                    发布
                    <i class="iconfont icon-jiahao"></i>
                </span>
            </div>
        </header>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>
</template>
<style scoped>
*{
    margin: 0;padding: 0;
}
.main{
    display:flex;
    flex-direction: column;
}
header{
    padding-top: .898148rem;
    width: 100%;
    height: 1.462963rem;
    background: white;
    border-bottom: .027778rem #e6e6e6 solid;
    display: flex;
}
header .h_title{
    height: 1.462963rem;
    display: flex;
}
header .h_push{
    position: relative;
    text-align: center;
    line-height: .722222rem;
    font-size: .333333rem;
    width: 1.5rem;
    height: .722222rem;
    color: white;
    border-radius: .138889rem;
    background: linear-gradient(to right,#ff3f01, #ff8329);
}
header .h_push i{
    -webkit-text-size-adjust:none;
    position: absolute;
    width: .194444rem;
    height: .194444rem;
    right: .185185rem;
    top: 0px;
    font-size: .194444rem;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.70); 

}
.h_title span{
    width: 8%;
}
.h_title li{
    text-align: center;
    line-height: 1.462963rem;
    width: 2.648148rem;
    height: 1.462963rem;
    list-style: none;
    z-index: 10;
    color: #767676;
    font-size: .509259rem;
    border-bottom: .027778rem #e6e6e6 solid;
}
.h_title .active{
    color: #f45a42;
    border-bottom: .027778rem #f55b43 solid;
}
header .push{
    padding-right: .583333rem;
    flex: 1;
    height: 1.462963rem;
    display: flex;
    justify-content:flex-end;
    align-items:center;
}
</style>
<script>
export default {
    data(){
        return{
            tab:[
                {title:"关注",name:'notice'},
                {title:"附近",name:'close'}
            ],
            tab_index:0   
        }
    },
    methods:{
        toggle(index){
            let name = this.tab[index].name;
            this.tab_index = index;
            this.$router.push({name});
        }
    }
}
</script>