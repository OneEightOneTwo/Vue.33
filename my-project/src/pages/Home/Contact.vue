<template>
    <div class="main">
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="news"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <div class="weui-panel__bd">
            <a
                v-for="(n,index) in news"
                :key="index"
                @click="toggle()"
                href="javascript:void(0);"
                class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <img
                    @click="showGallery(n.author.avatar_url)"
                    class="weui-media-box__thumb"
                    :src="n.author.avatar_url"
                    alt>
            </div>
            <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" v-text="n.author.loginname"></h4>
            <p class="weui-media-box__desc" v-text="n.title"></p>
            </div>
            </a>
            <!-- <div class="loading-wrapper" v-if="loading">
                加载中....
            </div> -->
            </div>
          </cube-scroll>
        </div>

    </div>
</template>
<style scoped>
.scroll-list-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1.740741rem;
}
</style>
<script>
export default {
  data() {
    return {
      news: [], // 用来渲染列表的数组
      options: {
        pullDownRefresh: {
          threshold: 90,
          stop: 40,
          txt: "刷新成功"
        }, // 配置下拉刷新
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: "上拉加载更多",
            noMore: "没有更多数据"
          }
        } // 配置上拉加载，若要关闭可直接 pullUpLoad：false
      },
      page: 0,
      isok: true,
      pulldown: true,
      pullup: true
    };
  },
  created() {
    this.loadData();
    
  },
  methods: {
    async loadData() {
      if (this.isok) {
        this.isok = false;
        let { data } = await this.$axios.get(
          "https://cnodejs.org/api/v1/topics",
          {
            params: {
              page: ++this.page,
              // 每页的条数
              limit: 10,
              // 主题
              tab: "ask"
            }
          }
        );
        this.news = [...this.news, ...data.data];
        this.isok = true;
      }
    },
    onPullingDown() {
      // 模拟更新数据
      let _this = this;
      setTimeout(() => {
        if (_this.pulldown) {
          if (_this.isok) {
            _this.isok = false;
            _this.$axios.get("https://cnodejs.org/api/v1/topics", {
                params: {
                page: ++_this.page,
                  // 每页的条数
                limit: 10,
                  // 主题
                tab: "ask"
                }
            })
            .then(function(response) {
                _this.isok = true;
                let { data } = response;
                _this.news = [...data.data, ..._this.news];
            })
            .catch(function(error) {
               
            });
          }
          // 如果有新数据
          // this.items.unshift(_foods[1])
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    },
    onPullingUp() {
      let _this = this;
      // 更新数据
      setTimeout(() => {
        if (_this.pullup) {
          // 如果有新数据
          // let newPage = _foods.slice(0, 5)
          // this.items = this.items.concat(newPage)
          _this.loadData();
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    },
    toggle(){
        console.log(111)
    }
  }
};
</script>

