<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/HomeRecommend'
import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banner:[],
      recommend:[]//保存得到的网络数据资源
    }
  },
  created(){
    getHomeMultidata()
    .then(res =>{
      // console.log(res.data.data.banner.list)
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav{
  color: #fff;
  background-color: var(--color-tint);
  /* base.css设置了的 */
}
</style>