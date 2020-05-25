import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Textarea, Switch, Image } from '@tarojs/components';
import { AtButton, AtIcon } from 'taro-ui';

import WithLogin from '../../components/with/with-login';

import './comment-reply.scss';

import { Comment, Like, Reply } from '../../common/api';

export default class CommentReply extends Component {

  state = {
    content: '',  // 内容
    images: [], // 图片列表
    isSecret: 0, // 是否私密评价
    showBar: true,  // 是否显示编辑框
    count: 9, // 可上传图片数量
    disabled: true, // 发表按钮是否禁用
    loading: false, // 是否正在发表中
    bottom: 0,  // 编辑框离底部高度，在键盘被激活时设置
    msg_count: 0,
    likes_count: 0,
    isLike: false,
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { msgCount, likesCount, type, parentId } = this.props;
    
    let isLike = false;
    if (type === 'comment') {
      isLike = Like.isLike('post', parentId);
    }
    if (type === 'reply') {
      isLike = Like.isLike('comment', parentId);
    }

    this.setState({
      msg_count:  msgCount,
      likes_count: likesCount,
      isLike,
    })
  }

  // 当按钮组被点击，激活编辑框
  barClick = () => {
    this.setState({
      showBar: false,
    })
  }

  // 选择图片
  chooseImg = () => {
    const { count, images } = this.state;
    if (count === 0) {
      Taro.showToast({
        icon: 'none',
        title: '最多只能9张图'
      });
      return;
    }
    Taro.chooseImage({
      count,
      sourceType: ['album'],
    }).then((res) => {
      const { tempFilePaths } = res;
      const newImgs = images.concat(tempFilePaths);
      this.setState({
        images: newImgs,
        count: 9 - newImgs.length,
      });
    }).catch((err) => {console.log(err);});
  }

  // 编辑框输入事件
  handleInput = (e) => {
    let content = e.detail.value;
    let disabled = false;
    if (!content) {
      disabled = true;
    }
    this.setState({
      content,
      disabled,
    })
  }

  // 当编辑框失去焦点
  handleBlur = () => {
    this.setState({
      bottom: 0,
    });
  }

  // 当键盘被唤醒或隐藏
  handleKeyboard = (e) => {
    let { height } = e.detail;
    this.setState({
      bottom: height,
    })
  }

  // 删除图片
  delImg(index) {
    const { images } = this.state;
    images.splice(index, 1);
    this.setState({
      images,
    });
  }

  // 是否私密
  switchChange = (e) => {
    const { value } = e.detail;
    if (value) {
      this.setState({
        isSecret: 1,
      });
    } else {
      this.setState({
        isSecret: 0,
      });
    }
  }

  // 发表
  publish = async () => {
    const { images, content, isSecret } = this.state;
    const { type, toUser, parentId, commentId, replyId,} = this.props;
    this.setState({
      disabled: true,
      loading: true,
    })

    let result = null;
    if (type === 'comment') { // 发表评论
      // 判断是否有图片，有的话需要先上传图片
      let imageList = [];
      if (images.length !== 0) {
        const imgs = await Comment.uploadImgs(images);
        imageList = imgs.map((item, index) => ({
          path: item,
          index
        }));
      }

      result = await Comment.create(content, imageList, parentId, toUser.id, isSecret);
    }

    if (type === 'reply') { // 发表回复
      // let imageList = [];
      // if (images.length !== 0) {
      //   const imgs = await Comment.uploadImgs(images);
      //   imageList = imgs.map((item, index) => ({
      //     path: item,
      //     index
      //   }));
      // }
      result = await Reply.create(content, [], parentId, toUser.id);
    }
    this.setState({
      disabled: false,
      loading: false,
    });
    if (result) {
      this.setState({
        content: '',
        images: [],
        showBar: true,
      });
    }

  }

  // 点赞
  doLike = async () => {
    const { parentId, type } = this.props;
    const { likes_count } = this.state;

    let res = null;
    if (type === 'comment') {
      res = await Like.doLike('post', parentId);
    }
    if (type === 'reply') {
      res = await Like.doLike('comment', parentId);
    }

    if (res) {
      this.setState({
        isLike: true,
        likes_count: likes_count + 1,
      });
    }
  }

  // 取消
  cancel = () => {
    this.setState({
      showBar: true,
      loading: false,
    })
  }

  render () {
    const {
      showBar,
      images,
      disabled,
      content,
      bottom,
      loading,
      msg_count,
      likes_count,
      isLike,
    } = this.state;
    const {
      openImagePicker,
      openSecret,
      canShare,
      toUser,
      type
    } = this.props;
    return (
      <View
        className='wrap'
        style={{
          bottom: bottom+'px',
        }}
      >
        {
          showBar ? (
            <View className='bar'>
              <View className='content-bar' onClick={this.barClick}>{
                type === 'comment' ?
                '来，神评是你的' :
                `@${toUser.user_nickname}`
              }</View>
              <View className='icon icon-comment'>
                <View className='sup'>{msg_count}</View>
              </View>
              <WithLogin onClick={this.doLike}>
                <View 
                  className={[
                    'icon',
                    isLike ? 'icon-zan-full' : 'icon-zan-line'
                  ]}
                >
                  <View className='sup'>{likes_count}</View>
                </View>
              </WithLogin>
              {
                canShare && (
                  <View className='icon icon-share'></View>
                )
              }
            </View>
          ) : (
            <View className='editor'>
              {
                images.length !== 0 && (
                  <ScrollView scrollX className='imgs-box'>
                    {
                      images.map((img, index) => (
                        <View key={`img_${index}`} className='img-box'>
                          <Image className='img' mode='aspectFill' src={img} />
                          <View className='del' onClick={() => this.delImg(index)}>
                            <AtIcon value='close' size='14' color='white' />
                          </View>
                        </View>
                      ))
                    }
                  </ScrollView>
                )
              }
              {/* 输入框 */}
              <Textarea
                className='textarea'
                value={content}
                onInput={this.handleInput}
                onBlur={this.handleBlur}
                autoFocus
                showConfirmBar={false}
                adjustPosition={false}
                onKeyboardHeightChange={this.handleKeyboard}
              ></Textarea>
              {/* 按钮组 */}
              <View className='option'>
                <View className='btn-group'>
                  <View className='btn'>
                    <AtButton size='small' onClick={this.cancel} >取消</AtButton>
                  </View>
                  <View className='btn'>
                    <AtButton size='small' onClick={this.publish} type='primary' disabled={disabled} loading={loading} >发表</AtButton>
                  </View>
                </View>
                <View className='left'>
                  {
                    type == 'reply' ? (
                      <View className='aite'>@{toUser.user_nickname}</View>
                    ) : null
                  }
                  {
                    openImagePicker && (
                      <View className='img-btn' onClick={this.chooseImg} >
                        <AtIcon value='image' size='22' color='#595959' />
                      </View>
                    )
                  }
                  {
                    openSecret && (
                      <View className='secret'>
                        私密评论
                        <Switch
                          type='checkbox'
                          className='switch'
                          color='#6190e8'
                          onChange={this.switchChange}
                        />
                      </View>
                    )
                  }
                </View>
              </View>
            </View>
          )
        }
      </View>
    )
  }
}