import type {
    AxiosPromise
} from 'axios';
import request from './request';
import url from './url';

const toRegister = (data: any): AxiosPromise => {
    return request.post(url.user.register.url, data)
}

const toLogin = (data: any): AxiosPromise => {
    return request.post(url.user.login.url, data)
}

const isLogin = (): AxiosPromise => {
    return request.get('/isLogin')
}

export {
    toRegister,
    toLogin,
    isLogin
}
