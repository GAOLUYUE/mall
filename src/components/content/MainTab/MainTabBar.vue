<template>
  <div>
      <tab-bar>
      <tab-bar-item path="/home" >
      <!-- 可以用activeColor="red"自动改变颜色 -->
        <i class="iconfont icon-shouye" slot="item-icon"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item path="/category">
        <i class="iconfont icon-leimupinleifenleileibie" slot="item-icon"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car">
        <i class="iconfont icon-gouwuchekong" slot="item-icon"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i class="iconfont icon-weibiaoti-_huabanfuben" slot="item-icon"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"//这里是大写，运用时是驼峰式
export default {
  name: 'MainTabbar',
  components: {
        TabBar,
        TabBarItem//注意引入了之后就要注册才有用
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
