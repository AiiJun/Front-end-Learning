import request from '@/utils/request'

export const loginAPI = ({ account, password }) => {
    return request.post('/login',{
        account,
        password
    })
}