<template>
  <List
    class="shop_wrapper"
    v-if="model.pageList.length"
    offset="50"
    v-model:loading="model.loading"
    v-model:error="model.error"
    :immediate-check="false"
    :finished="model.noMore"
    @load="model.loadMore()">
    <div class="shop_item" v-for="shop of model.pageList" :key="shop.id">
      <img v-lazy="shop.avatar">
      <div class="shop_item_right">
        <div>
          <p class="shop_name">{{ shop.name }}</p>
          <p class="shop_desc">{{ shop.desc }}</p>
        </div>
        <p class="shop_deliver">{{ `￥${shop.deliver_fee_start_amount}起送 / 配送费￥${shop.deliver_fee}`}}</p>
      </div>
    </div>
  </List>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue'
  import IndexModel from '../config/model'
  import { List } from 'vant'

  export default defineComponent({
    name: 'index-shop',
    components: {
      List,
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
  .shop_item{
    display: flex;
    justify-content: start;
    align-items: start;
    margin-bottom: 5px;
    background-color: #fff;
    padding: 5px;
    border-radius: 3px;
    >img{
      width: 65px;
      height: 65px;
      margin-right: 10px;
    }
    .shop_item_right{
      p{
        margin: 0;
      }
      .shop_name{
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 3px;
      }
      .shop_desc{
        font-size: 12px;
        color: var(--text-color-hint);
      }
      .shop_deliver{
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
</style>
