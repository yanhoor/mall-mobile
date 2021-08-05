<template>
  <div class="page_container">
    <Search></Search>
    <PullRefresh @refresh="model.refresh()" v-model="model.refreshing">
      <Swiper></Swiper>
      <div class="index_content">
        <ShopCate></ShopCate>
        <Shops></Shops>
      </div>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, provide, onActivated, onDeactivated } from 'vue'
  import { PullRefresh } from 'vant'
  import IndexModel from './config/model'
  import Swiper from './components/_swiper.vue'
  import ShopCate from './components/_shop_cate.vue'
  import Search from './components/_search.vue'
  import Shops from './components/_shops.vue'

  export default defineComponent({
    name: 'index',
    components: {
      PullRefresh,
      Swiper,
      ShopCate,
      Search,
      Shops,
    },
    setup(){
      const model = reactive<IndexModel>(new IndexModel())
      const lastScrollTop = ref(0)
      provide('model', model)
      model.initData()

      onActivated(() => {
        document.documentElement.scrollTop = lastScrollTop.value
      })

      onDeactivated(() => {
        lastScrollTop.value = document.documentElement.scrollTop
      })

      return {
        model,
        lastScrollTop,
      }
    },
  })
</script>

<style lang="less" scoped>
  .index_top{
    position: relative;
    padding-top: 5px;
    margin-top: 40px;
    .top_bg{
      position: absolute;
      width: 100%;
      height: 150px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      background-image: linear-gradient(0deg,#f1503b,#c82519 50%);
    }
  }
  .index_content{
    padding: 0 10px;
  }
</style>
