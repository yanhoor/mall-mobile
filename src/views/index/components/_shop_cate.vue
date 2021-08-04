<template>
  <div v-if="model.shopCateList.length" class="shop_cate_wrapper">
    <div v-for="cate of model.shopCateList" :key="cate.name" class="shop_cate_item">
      <img v-lazy="cate.icon">
      <p>{{ cate.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue'
  import IndexModel from '../config/model'

  export default defineComponent({
    name: 'index-shop-cate',
    components: {

    },
    setup(){
      const model = inject<IndexModel>('model')

      return {
        model,
      }
    }
  })
</script>

<style lang="less" scoped>
  .shop_cate_wrapper{
    display: flex;
    flex-wrap: wrap;
    .shop_cate_item{
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      >p{
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        width: 100%;
        text-align: center;
      }
    }
  }
</style>
