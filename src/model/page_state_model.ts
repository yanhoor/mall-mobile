import {PageState} from './page_state'

export default class PageStateModel {
    private _pageState: PageState = 0;

    constructor() {
        console.log('PageStateModel constructor');
    }

    get pageState(): PageState {
        return this._pageState;
    }

    set pageState(value: PageState) {
        this._pageState = value;
    }

    set refreshing(val: boolean){
        this.pageState = val ? PageState.refreshing : PageState.completed;
    }

    set loading(val: boolean){
      this.pageState = val ? PageState.loading : PageState.completed;
    }

    setInit() {
        this.pageState = PageState.init;
    }

    setRefreshing() {
        this.pageState = PageState.refreshing;
    }

    setError() {
        this.pageState = PageState.error;
    }

    setEmpty() {
        this.pageState = PageState.empty;
    }

    setCompleted() {
        this.pageState = PageState.completed;
    }

    setAuthFailed() {
        this.pageState = PageState.authFailed;
    }

    setBusy() {
        this.pageState = PageState.busy;
    }

    setNoMore() {
        this.pageState = PageState.noMore;
    }

    get init(): boolean {
        return this.pageState === PageState.init;
    }

    get refreshing(): boolean {
        return this.pageState === PageState.refreshing;
    }

    get error(): boolean {
        return this.pageState === PageState.error;
    }

    get empty(): boolean {
        return this.pageState === PageState.empty;
    }

    get authFailed(): boolean {
        return this.pageState === PageState.authFailed;
    }

    get completed(): boolean {
        return this.pageState === PageState.completed;
    }

    get busy(): boolean {
        return this.pageState === PageState.busy;
    }

    get noMore(): boolean {
        return this.pageState === PageState.noMore;
    }

    get loading(): boolean{
      return this.pageState === PageState.loading;
    }
}
