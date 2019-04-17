<template>
  <div>
    <div class="weui-search-bar weui-search-bar_focusing" 
     id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input
            v-model="searchInput"
            v-focus='true'
            type="search"
            class="weui-search-bar__input"
            id="searchInput"
            placeholder="搜索"
            required
          >
          <a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label
          class="weui-search-bar__label"
          id="searchText"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
    <!-- 要有输入内容和父组件bool值判断 -->
    <div v-show="bool&&searchInput" class="weui-cells searchbar-result" id="searchResult">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
    return {
      bool: true,
      searchInput: ""
    };
  },
  methods: {
    toggle() {
      this.$router.go(-1);
    },
    clear() {
      // 清空搜索框
      this.searchInput = "";
    }
  },
  directives: {
    //自动聚焦
    focus:{
      inserted:function (el) {
          el.focus()
        }
    }
  }
}
</script>


