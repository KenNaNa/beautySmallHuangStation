import type {
    AxiosPromise
} from 'axios';
import request from './request';
import url from './url';

const getBannerList = (): AxiosPromise => {
    return request.get(url.banners.getBannerList.url)
};

const getDetailById = (data: Object): AxiosPromise => {
    return request.post(url.banners.getDetailById.url, data)
}

export {
    getBannerList,
    getDetailById
}
