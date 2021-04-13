import type {
    AxiosPromise
} from 'axios';
import request from './request';
import url from './url';

const getBannerBySearch = (data: Object): AxiosPromise => {
    return request.post(url.search.search.url, data);
};

export {
    getBannerBySearch
}
