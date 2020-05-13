<template>
  <div class="slide">
    <slot></slot>
    <!-- 这个slopt用于放入图片 -->
  </div>
</template>

<script>
	export default {
		name: "Slide"
	} 
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }
  .slide img {
    width: 100%;
  }
</style>