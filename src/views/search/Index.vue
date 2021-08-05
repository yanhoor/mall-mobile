<template>
  <div class="page_container">
    <div class="search_container">
      <input placeholder="搜索店铺" v-model.trim="keyword"/>
      <Button round icon="search" size="small" type="primary" @click="onSearch"></Button>
    </div>
    <div class="search_history">
      <p>搜索历史</p>
      <ul>
        <li v-for="item of searchHistoryList" :key="item" @click="keyword = item">{{ item }}</li>
      </ul>
    </div>
    <div style="margin: 10px">
      <Button round block type="primary" size="small" @click="onClickClear">清空搜索历史</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import { Field, Button, Toast } from 'vant'

  export default defineComponent({
    name: 'search',
    components: {
      Field,
      Button,
    },
    setup(){
      const l = localStorage.getItem('l_search_log')
      const keyword = ref('')
      let searchHistoryList = ref(l ? JSON.parse(l) : [])
      const onSearch = () => {
        if(!keyword.value){
          Toast.fail('请输入关键词')
          return false
        }
        const index = searchHistoryList.value.indexOf(keyword.value)
        if(index > -1) searchHistoryList.value.splice(index, 1)
        searchHistoryList.value.unshift(keyword.value)
        localStorage.setItem('l_search_log', JSON.stringify(searchHistoryList.value))
      }

      const onClickClear = () => {
        searchHistoryList.value = []
        localStorage.removeItem('l_search_log')
      }

      return {
        keyword,
        searchHistoryList,
        onSearch,
        onClickClear,
      }
    }
  })
</script>

<style lang="less" scoped>
  .search_container{
    display: flex;
    align-items: center;
    margin: 10px;
    input{
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 30px;
      margin-right: 10px;
      flex-grow: 1;
    }
  }
  .search_history{
    >p{
      font-size: 16px;
      font-weight: 600;
      margin-left: 10px;
    }
    ul{
      max-height: 400px;
      overflow: auto;
      li{
        padding: 10px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
      }
    }
  }
</style>
