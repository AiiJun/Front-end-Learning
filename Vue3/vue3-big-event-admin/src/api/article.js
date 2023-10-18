import request from '@/utils/request'

// 分类: 获取文章分类
export const artGetChannelsService = () => {
    return request.get('/my/cate/list')
}
// 分类: 添加文章分类
export const artAddChannelService = (data) => {
    return request.post('/my/cate/add', data)
}
// 分类: 编辑文章分类
export const artEditChannelService = (data) => {
    return request.put('/my/cate/info', data)
}
// 分类: 删除文章分类
export const artDelChannelService = (id) => {
    return request.delete('/my/cate/del', {
        params: {
            id
        }
    })
}

// 文章: 获取文章列表
export const artGetListService = (params) => request.get('/my/article/list', { params })
// 文章: 添加文章
export const artPublishService = (data) => request.post('/my/article/add', data)
// 文章: 详情文章数据
export const artGetDetailService = (id) => request.get('my/article/info', { params: { id } })
// 文章: 编辑文章接口
export const artEditService = (data) => request.put('my/article/info', data)
// 文章: 删除文章接口
export const artDelService = (id) => request.delete('my/article/info', { params: { id } })