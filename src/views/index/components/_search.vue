<template>
  <div class="index_search">
    <img v-lazy="model.conf.logo" v-if="model.conf">
    <div class="search_container">
      <Icon name="search" size="20" color="#aaa" class="search_icon"></Icon>
      <span class="search_hint">搜索店铺</span>
    </div>
    <Icon name="chat-o" size="25" color="#fff"></Icon>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue'
  import { Icon } from 'vant'
  import IndexModel from '../config/model'

  export default defineComponent({
    name: 'index-search',
    components: {
      Icon,
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

  .index_search{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: #e43130;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 7px 10px;
    >img{
      width: 30px;
      height: 30px;
    }
    .search_container{
      border-radius: 45px;
      flex-grow: 1;
      margin: 0 10px;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 5px 10px;
      background-color: #fff;
      .search_icon{
        margin-right: 5px;
      }
      .search_hint{
        color: var(--text-color-hint);
        font-size: 12px;
      }
    }
  }
</style>
