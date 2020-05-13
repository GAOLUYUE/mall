<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name:'NavBar',
  components:{},
  data(){
    return {
    }
  },
}
</script>
<style  scoped>
.nav-bar{
    display:flex;
    text-align: center;
    line-height: 44px;
    box-shadow: 0px 3px 10px rgba(139, 139, 139, .3);
}
.left,.right{
    width: 60px;
}
.center{
    flex:1;
}
</style>