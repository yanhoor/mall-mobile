<template>
  <div class="home_container">
    <router-view #="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
    <Tabs></Tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Tabs from './components/_tabs.vue'

  export default defineComponent({
    name: 'home-index',
    components: {
      Tabs,
    },
    setup(props, ctx){

    }
  })
</script>

<style lang="less" scoped>
  .home_container{
    padding-bottom: 60px;
  }
</style>
