<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key="index" class="recommendItem">
          <a :href="item.link">
              <img :src="item.image" alt="commend-img">
              <div class="title">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  components:{},
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
    return {
    }
  },
}
</script>
<style  scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 20px;
    padding-right: 5px;
    border-bottom: 10px solid #eee;
}
.recommendItem{
    flex: 1;
    margin-left: 5px;
}
.recommendItem img{
    width: 100%;
}
</style>