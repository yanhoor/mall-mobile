export enum PageState {
    busy, // 页面正在处理操作
    init, // 初次加载页面数据
    refreshing, // 加载页面数据
    noMore, // 所有列表数据加载完成
    loading, // 加载更多
    completed, // 页面请求完成
    empty, // 列表数据为空
    error, // 请求错误
    authFailed // 登录失败
}

