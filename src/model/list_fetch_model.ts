import PageFetchModel from "@/model/page_fetch_model";

export default abstract class ListFetchModel extends PageFetchModel {
    pageList: Array<any> = [];
    currentPage: number = 1;
    pageSize: number = 3;

    async initData() {
        this.setInit();
        await this.refresh(true);
    }

    async refresh(init?: boolean) {
        if(!init) this.setRefreshing();

        this.refreshOther();
        await this.refreshList();
    }

    async refreshOther(): Promise<any> {

    }

    async refreshList() {
        try {
            this.currentPage = 1;
            let data: Array<any>;
            let res = await this.getList();
            data = res.list ?? [];
            this.pageList = [];
            this.setCompleted();
            if (data.length === 0) {
                this.setEmpty();
            } else {
                this.pageList = data;
                if (data.length < this.pageSize) {
                    this.setNoMore();
                }
            }
        } catch (e) {
            this.setError();
        }
    }

    async loadMore(){
        try {
            this.currentPage ++;
            let data: Array<any>;
            this.loading = true;
            let res = await this.getList();
            data = res.list ?? [];
            this.setCompleted();
            if (data.length === 0) {
                this.currentPage --;
                this.setNoMore();
            } else {
                this.pageList = this.pageList.concat(data);
                if (data.length < this.pageSize) {
                    this.setNoMore();
                }
            }
        } catch (e) {
            console.log(e);
            this.setError();
        }
    }

    abstract getList(): Promise<any>;

    // 没用到
    getData(): Promise<any> {
        return Promise.resolve(true);
    }
}
