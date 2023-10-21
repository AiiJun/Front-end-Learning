import request from '@/utils/request'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
}
// 获取最新的购物车列表
export const findNewCartListAPI = () => {
    return request.get('/member/cart')
}
// 删除购物车
export const delCartAPI = (ids) => {
    return request({
      url: '/member/cart',
      method: 'DELETE',
      data: {
        ids
      }
    })
  }
// 合并购物车
export const mergeCartAPI = (data) => {
    return request.post('/member/cart/merge', data)
}