const url = {
    user: {
        register: {
            url: '/user/register',
            method: 'post'
        },
        login: {
            url: '/user/login',
            method: 'post'
        },
        isLogin: {
            url: '/user/isLogin',
            method: 'get'
        }
    },
    banners: {
        getBannerList: {
            url: '/banner/banners',
            method: 'get'
        },
        getDetailById: {
            url: '/banner/detail',
            method: 'post'
        }
    }
};

export default url;
