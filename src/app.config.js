export default {
  pages: [
    'pages/index/index',
    'pages/notice/notice',
    'pages/me/me',
    'pages/user-school/user-school',
    'pages/user-verify/user-verify',
    'pages/user-home/user-home',
    'pages/topic-maidan/topic-maidan',
    'pages/topic-create/topic-create',
    'pages/post-edit/post-edit',
    'pages/post/post'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#13100e',
    selectedColor: '#13100e',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '社区',
        iconPath: 'images/ic_community_line.png',
        selectedIconPath: 'images/ic_community_full.png'
      },
      {
        pagePath: 'pages/notice/notice',
        text: '消息',
        iconPath: 'images/ic_notice_line.png',
        selectedIconPath: 'images/ic_notice_full.png'
      },
      {
        pagePath: 'pages/me/me',
        text: '我的',
        iconPath: 'images/ic_me_line.png',
        selectedIconPath: 'images/ic_me_full.png'
      }
    ]
  },
  subPackages: [
    {
      root: 'pages/subPackage/',
      pages: [
        'comment/comment',
        'topic-home/topic-home',
        'notice-list/notice-list',
        'user-edit/user-edit'
      ]
    }
  ]
}
