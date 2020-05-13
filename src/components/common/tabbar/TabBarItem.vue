<template>
  <div class="tab-bar-item" @click="itemClick" >
      <slot name="item-icon"></slot>
      <div :style="activeStyle">
         <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  components: {},
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'#c9c2c2'
      }
  },
  data() {
    return {
        // isActive:false
    }
  },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
  methods:{
      itemClick(){
          if(this.$route.path == this.path) return;
          this.$router.push(this.path);
      }
  }
}
</script>

<style scoped>
@import "../../../assets/img/tabbar/iconfont.css";
.tab-bar-item{
  color: #615d5d;
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 10px;
  /* line-height: 49px; */
}
/* .tab-bar-item:hover{
  color: #aaa3a3;
} */

</style>
