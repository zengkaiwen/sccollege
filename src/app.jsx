import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import 'taro-ui/dist/style/index.scss'

import Index from './pages/index'

import configStore from './store'


import { getUser } from './actions/user';
// import './custom-theme.scss';

import './font.css'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  componentDidMount () {
    store.dispatch(getUser());
  }

  config = {
    pages: [
      'pages/index/index',
      'pages/notice/notice',
      'pages/me/me',
      'pages/login/login',
      'pages/user-edit/user-edit',
      'pages/user-school/user-school',
      'pages/user-verify/user-verify',
      'pages/user-home/user-home',
      'pages/topic-maidan/topic-maidan',
      'pages/topic-create/topic-create'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
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
    }
  }

  // componentDidShow () {}

  // componentDidHide () {}

  // componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
