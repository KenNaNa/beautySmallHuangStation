import type { AxiosPromise } from 'axios'
import request from './request'

// 获取首页banner新闻数据
export const getBannerList = (): AxiosPromise => {
    return request({
        url: '/bannerList'
    })
}

//  获取首页newsList数据
export const getNewsList = (): AxiosPromise => {
    return request({
        url: '/newsList'
    })
}

//获取newsDetail数据
export const getNewsDetail = (id: any): AxiosPromise => {
    return request.post('/detailList', {
        id
    })
}

// 登录验证
export const toLogin = (data: Object): AxiosPromise => {
    return request.post('/login', data)
}



export const isLogin = (): AxiosPromise => {
    return request.get('/isLogin')
}
