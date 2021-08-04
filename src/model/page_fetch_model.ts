import PageStateModel from "@/model/page_state_model"
import http from '../http/index'
import urls from '../http/urls'
import { markRaw } from 'vue'
import { Toast } from 'vant'

export default abstract class PageFetchModel extends PageStateModel{
  $http = markRaw(http) // 禁止转为响应式属性
  $urls = markRaw(urls)
  $toast = markRaw(Toast)

    async initData() {
        this.setInit();
        await this.refresh(true);
    }

    async refresh(init?: boolean) {
        if(!init) this.setRefreshing();

        try {
            await this.getData();
            this.setCompleted();
        } catch (e) {
            this.setError();
        }
    }

    abstract getData(): Promise<any>;
}
