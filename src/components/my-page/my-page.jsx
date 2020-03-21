import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import { AtActivityIndicator, AtButton } from 'taro-ui'

import Loading from '../../components/loading/loading';

import { Base } from '../../common/api';

import './my-page.scss';

export default class MyPage extends Component {

  state = {
    margin: 0,
    beginY: 0,
    top: -100,
    showLoading: false,
    isLoading: false,
    transition: 'none'
  }

  componentDidMount() {
    this.mapPropsToState();
    this.linkRef();
  }

  mapPropsToState() {
    const { scrollY = true } = this.props;
    this.setState({
      scrollY,
    });
  }

  linkRef = () => {
    const { onRef } = this.props;
    if (onRef) onRef(this);
  }

  onRetry = () => {
    const { onRetry: propsRetry } = this.props;
    if (propsRetry) propsRetry();
  }

  hideRefresh() {
    const newState = this.state;
    newState['top'] = 10;
    newState['isLoading'] = false;
    newState['margin'] = 0;
    newState['scrollY'] = true;
    this.setState({
      ...newState,
    });
    setTimeout(() => {
      this.setState({
        showLoading: false,
      });
    }, 200);
    setTimeout(() => {
      this.setState({
        top: -100,
      });
    }, 2000);
  }

  // 当触摸移动时
  onTouchmove = (e) => {
    // console.log('TouchMove');
    const {
      isLoading,
      beginY,
      margin,
      showLoading
    } = this.state;
    const { enableRefresh, marginOffset = 0 } = this.props;
    if (!isLoading && enableRefresh) {
      const newState = this.state;
      // console.log('进入准备刷新');
      const y = e.changedTouches[0].clientY;
      if (beginY === 0) {
        newState['scrollY'] = false;
      }
      newState['margin'] = margin + (y - beginY) / 3;
      if (margin > marginOffset && !showLoading) {
        newState['showLoading'] = true;
      }
      newState['beginY'] = y;
      this.setState({
        ...newState,
      });
      // console.log('beginY', newState['beginY']);
      // console.log('margin', newState['margin']);
    }
  }

  // 当触摸结束
  onTouchend = () => {
    // console.log('TouchEnd')
    const {
      isLoading,
      margin,
    } = this.state;
    const { onRefresh, enableRefresh } = this.props;
    console.log(enableRefresh);
    if (!isLoading && enableRefresh) {
      // console.log('进入刷新');
      const newState = this.state;
      newState['transition'] = 'all 0.3s';
      newState['beginY'] = 0;
      if (margin > 50) { // 当满足上拉刷新的高度时
        newState['isLoading'] = true;
        newState['margin'] = 15;
        // 调用组件的刷新
        onRefresh();
      } else {
        newState['scrollY'] = true;
        newState['margin'] = 0;
        setTimeout(() => {
          this.setState({
            isLoading: false,
            showLoading: false
          })
        }, 200);
      }
      this.setState({
        ...newState,
      });
    }
  }

  // 当滚动时
  onScroll = (e) => {
    const { onScroll: propsOnScroll } = this.props;
    propsOnScroll(e.detail);
  }

  // 当滚动到顶部
  onScrolltolower = () => {
    const { onScrollToLower: propsOnScrollToLower } = this.props;
    propsOnScrollToLower();
  }

  render() {
    const {
      margin,
      top,
      showLoading,
      transition,
      scrollY
    } = this.state;
    const {
      state = 0,
      showMoreLoading = true,
      count = 0,
      baseHeight = '100vh',
      autoHeight = false,
      bottomOffset = 0,
      enableTips = true,
      offset = Base.getHeadHeight(),
      empty = null,
      children
    } = this.props;
    return (
      <View
        className='page'
        style={{
          height: autoHeight ? 'auto' : `calc(${baseHeight} - ${offset}PX - ${bottomOffset}px)`,
        }}
      >
        {
          state === 0 ? (
            <View className='page-init'>
              <AtActivityIndicator className='page-loading' mode='center' content='加载中...' />
            </View>
          ) : state === 1 ? (
            <View className='page-error'>
              <View className='des' style={{marginBottom: '10px'}}>加载失败</View>
              <AtButton type='primary' size='small' onClick={this.onRetry}>点击重试</AtButton>
            </View>
          ) : state === 2 ? (
            <View className='page-empty'>
              {empty}
            </View>
          ) : (
            <View className='page-content'>
              <ScrollView
                scrollY={!showLoading && scrollY}
                onTouchMove={this.onTouchmove}
                onTouchEnd={this.onTouchend}
                onScroll={this.onScroll}
                onScrollToLower={this.onScrolltolower}
                className='content'
              >
                <View
                  className='loading_wrap'
                  style={{
                    margin: `${margin}px 0`,
                    transition: transition
                  }}
                >
                  {/* 这里是显示刷新的加载 */}
                  {
                    showLoading ? 
                      <Loading />
                    : null 
                  }
                </View>
                {children}
                {/* 这里是加载更多 */}
                {
                  showMoreLoading ?
                  <AtActivityIndicator mode='center' />
                  : null
                }
              </ScrollView>
              {/* 是否展示推荐内容 */}
              {
                enableTips ? (
                  <View>
                    {
                      count ? 
                      <View className='tips' style={{top: `${top}px`}}>为你选出{count}条好内容</View>
                      :
                      <View className='tips' style={{top: `${top}px`}}>暂时没有更好的内容</View>
                    }
                  </View>
                ) : null
              }
            </View>
          )
        }
      </View>
    );
  }
}