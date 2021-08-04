<template>
  <div v-if="model.conf" class="swipe_wrapper">
    <div class="top_bg"></div>
    <Swipe :autoplay="3000" class="swipe">
      <SwipeItem v-for="banner of model.conf.banner_list" :key="banner.img" class="swipe_item">
        <img v-lazy="banner.img">
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue'
  import { Swipe, SwipeItem } from 'vant'
  import IndexModel from '../config/model'

  export default defineComponent({
    name: 'index-swiper',
    components: {
      Swipe,
      SwipeItem,
    },
    setup(){
      const model = inject<IndexModel>('model')

      return {
        model,
      }
    },
  })
</script>

<style lang="less" scoped>
  .swipe_wrapper{
    position: relative;
    margin-top: 40px;
    overflow: hidden;
    .top_bg{
      position: absolute;
      width: 100%;
      height: 150px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      background-image: linear-gradient(0deg,#f1503b,#c82519 50%);
    }
  }
  .swipe{
    border-radius: 5px;
    margin: 20px 10px;
  }
  .swipe_item{
    img{
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }
  }
</style>
