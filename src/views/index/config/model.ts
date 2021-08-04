import ListFetchModel from '@/model/list_fetch_model'

export default class IndexModel extends ListFetchModel{
  conf = null
  shopCateList = []

  async refreshOther(){
    return Promise.all([
      this.getConfig(),
      this.getShopCate(),
    ])
  }

  getList(): Promise<any> {
    return this.$http.fetch(this.$urls.shopList, { current: this.currentPage, pageSize: this.pageSize }, { method: 'get' })
  }

  async getConfig(){
    return this.$http.fetch(this.$urls.indexConfig, {}, { method: 'get' }).then(r => {
      if(r.success){
        this.conf = r.conf
      }else{
        this.$toast.fail(r.msg)
      }
    })
  }

  async getShopCate(){
    return this.$http.fetch(this.$urls.shopCateList, {}, { method: 'get' }).then(r => {
      if(r.success){
        this.shopCateList = r.list
      }else{
        this.$toast.fail(r.msg)
      }
    })
  }
}
