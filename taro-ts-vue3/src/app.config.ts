export default {
  pages: [
    'pages/login/index',
    'pages/select/index',
    'pages/home/index',
    'pages/detail/index',
    'pages/add/index',
    'pages/center/index',
    'pages/accountDetail/index',
    'pages/myAlbum/index',
    'pages/myCollection/index',
    'pages/myOrder/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/add/index',
        text: '添加'
      },
      {
        pagePath: 'pages/center/index',
        text: '中心'
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
