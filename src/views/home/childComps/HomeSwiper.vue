<template>
  <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="lunbo">
          </a>
        </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
name:'HomeSwiper',
  components:{
      Swiper, 
      SwiperItem
  },
  data(){
    return {
        
    }
  },
  props:{
      banner:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style  scoped>
</style>