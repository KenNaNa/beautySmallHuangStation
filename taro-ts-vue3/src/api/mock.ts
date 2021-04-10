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
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "2",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "3",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "4",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "5",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "6",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "7",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "8",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "9",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "10",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "11",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "12",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "13",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "14",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
    {
        "id": "15",
        "images": "https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0",
        "title": "翘屁美女",
        "imgs": ["https://lh3.googleusercontent.com/proxy/jm-vkGlM1pUacnxIeANmQvU81UxJdnlmqoinKNHSWJxIW_VgxPvOEaAD9clRAI4pYeJC966KdR-WgSSy_Pq62uiQtW4cA13yrAfs8Y_pc7VgJKaw_P12X0AToVgFvlzdq3MITshUBD4tsIqRPxN_1t0", "https://lh3.googleusercontent.com/proxy/nKFxyM99a1u_u5-eJL9YM0PiTJpiVkYfPL5rikoKZQgarWTXCxZWIG9hTXrJbS3OO3EKPAJ_1ukmfAsH3fwqlwyC1Pt-ixm1TUZDsKSeS-UzlBs"],
        "desc": ""
    },
]

const newsData: Array<Data> = [
    {
        "id": "1",
        "images": [".../../../public/assets/logo.png"],
        "title": "金发碧眼为什么很少在白人以外的种族出现？",
        "author": "作者 / biokiwi"
    },
    {
        "id": "2",
        "title": "《哈利波特》原著中与电影中人物有哪些差别？",
        "author": "作者 / kalinnn",
        "images": [".../../../public/assets/logo.png"]
    },
    {
        "id": "3",
        "title": "有哪些适合情侣两个人一起玩的桌游？",
        "author": "作者 / 北邙",
        "images": [".../../../public/assets/logo.png"]
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
