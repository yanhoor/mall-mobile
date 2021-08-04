<template>
  <Tabbar v-model="activeTab">
    <TabbarItem v-for="tab of tabs" :key="tab.name" :icon="tab.icon" :to="tab.to">
      {{ tab.name }}
    </TabbarItem>
  </Tabbar>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import { Tabbar, TabbarItem } from 'vant'

  export default defineComponent({
    name: 'home-index-tabs',
    components: {
      Tabbar,
      TabbarItem,
    },
    setup(props, ctx){
      const activeTab = ref(0)
      const tabs = reactive([
        {
          name: '首页',
          icon: 'home-o',
          to: '/index',
        },
        {
          name: '我的',
          icon: 'user-circle-o',
          to: '/me'
        },
      ])

      return {
        activeTab,
        tabs,
      }
    },
  })

</script>
