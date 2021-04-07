import Mock from 'mockjs'
interface Data {
    id?: string | number,
    title?: string,
    images?: string | Array<string>,
    imgs?: Array<string>,
    author?: string,
    token?: string,
    desc?: string
}

const bannerData: Array<Data> = [
    {
        "id": "1",
        "images": "./2021-02-27/1.jpg",
        "title": "翘屁美女",
        "imgs": ["./2021-02-27/1.jpg", "./2021-02-27/16.jpg"],
        "desc": ""
    },
    {
        "id": "2",
        "images": "./2021-02-27/2.jpg",
        "imgs": ["./2021-02-27/2.jpg", "./2021-02-27/17.jpg"],
        "title": "青春美女",
        "desc": ""
    },
    {
        "id": "3",
        "title": "翘屁美女",
        "images": "./2021-02-27/3.jpg",
        "imgs": ["./2021-02-27/3.jpg", "./2021-02-27/18.jpg"],
        "desc": ""
    },
    {
        "id": "4",
        "title": "性感美女",
        "images": "./2021-02-27/4.jpg",
        "imgs": ["./2021-02-27/4.jpg", "./2021-02-27/19.jpg"],
        "desc": ""
    },
    {
        "id": "5",
        "title": "哈哈美女",
        "images": "./2021-02-27/5.jpg",
        "imgs": ["./2021-02-27/5.jpg", "./2021-02-27/20.jpg"],
        "desc": ""
    },
    {
        "id": "6",
        "title": "性感美女",
        "images": "./2021-02-27/6.jpg",
        "imgs": ["./2021-02-27/6.jpg", "./2021-02-27/21.jpg"],
        "desc": ""
    },
    {
        "id": "7",
        "title": "爱笑美女",
        "images": "./2021-02-27/7.jpg",
        "imgs": ["./2021-02-27/7.jpg", "./2021-02-27/22.jpg"],
        "desc": ""
    },
    {
        "id": "8",
        "title": "哈哈美女",
        "images": "./2021-02-27/8.jpg",
        "imgs": ["./2021-02-27/8.jpg", "./2021-02-27/23.jpg"],
        "desc": ""
    },
    {
        "id": "9",
        "title": "爱笑美女",
        "images": "./2021-02-27/9.jpg",
        "imgs": ["./2021-02-27/9.jpg", "./2021-02-27/24.jpg"],
        "desc": ""
    },
    {
        "id": "10",
        "title": "爱笑美女",
        "images": "./2021-02-27/10.jpg",
        "imgs": ["./2021-02-27/10.jpg", "./2021-02-27/25.jpg"],
        "desc": ""
    },
    {
        "id": "11",
        "title": "爱笑美女",
        "images": "./2021-02-27/11.jpg",
        "imgs": ["./2021-02-27/11.jpg", "./2021-02-27/26.jpg"],
        "desc": ""
    },
    {
        "id": "12",
        "title": "爱笑美女",
        "images": "./2021-02-27/12.jpg",
        "imgs": ["./2021-02-27/12.jpg", "./2021-02-27/27.jpg"],
        "desc": ""
    },
    {
        "id": "13",
        "title": "爱笑美女",
        "images": "./2021-02-27/13.jpg",
        "imgs": ["./2021-02-27/13.jpg", "./2021-02-27/28.jpg"],
        "desc": ""
    },
    {
        "id": "14",
        "title": "爱笑美女",
        "images": "./2021-02-27/14.jpg",
        "imgs": ["./2021-02-27/14.jpg", "./2021-02-27/29.jpg"],
        "desc": ""
    },
    {
        "id": "15",
        "title": "爱笑美女",
        "images": "./2021-02-27/15.jpg",
        "imgs": ["./2021-02-27/15.jpg", "./2021-02-27/30.jpg"],
        "desc": ""
    },
]

const newsData: Array<Data> = [
    {
        "id": "1",
        "images": ["../assets/logo.png"],
        "title": "金发碧眼为什么很少在白人以外的种族出现？",
        "author": "作者 / biokiwi"
    },
    {
        "id": "2",
        "title": "《哈利波特》原著中与电影中人物有哪些差别？",
        "author": "作者 / kalinnn",
        "images": ["../assets/logo.png"]
    },
    {
        "id": "3",
        "title": "有哪些适合情侣两个人一起玩的桌游？",
        "author": "作者 / 北邙",
        "images": ["../assets/logo.png"]
    }
]

const loginData: Data = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInVzZXJfaWQiOjEsImlhdCI6MTU5NDI2MjQ5NSwiZXhwIjoxNTk0MzQ4ODk1fQ.1MJ_MAFgpBjOjpggj69Xz8F_evBcMAenRK_7a8fdVrc"
}

Mock.mock('/api/bannerList', 'get', {
    "data": bannerData
})

Mock.mock('/api/newsList', 'get', {
    "data": newsData
})


Mock.mock('/api/login', 'post', {
    "data": loginData
})
