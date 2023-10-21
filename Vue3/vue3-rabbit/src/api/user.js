import request from '@/utils/request'

export const loginAPI = ({ account, password }) => {
    return request.post('/login',{
        account,
        password
    })
}
// 猜你喜欢接口
export const getLikeListAPI = ({ limit }) => {
    return request({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }