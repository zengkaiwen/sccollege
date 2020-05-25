import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTextarea, AtFloatLayout, AtButton, AtIcon, AtImagePicker } from 'taro-ui';

import './post-editor.scss';

import TopicList from '../../components/topic-list/topic-list';

import { Post } from '../../common/api';

class PostEditor extends Component {

  state = {
    content: '',
    topicId: 0,
    topicName: '',
    images: [],
    isOpened: false,
    disabled: true,
    count: 9,
    showAddImg: true,
    loading: false,
  }

  componentDidMount() {

  }

  init() {
    const { postId } = this.props;
    if (postId) { // 去获取帖子详情

    }
  }

  handleTopicClick = () => {
    this.setState({
      isOpened: true,
    });
  }

  handleTextChange = (e) => {
    const { topicId } = this.state;
    const content = e.target.value;
    let disabled = true;
    if (topicId !== 0 && content.trim() !== '') {
      disabled = false;
    }
    this.setState({
      content,
      disabled,
    });
  }

  handleImageChange = (files, type, index) => {
    const count = 9 - files.length;
    let showAddImg = true;
    if (count === 0) {
      showAddImg = false;
    }
    this.setState({
      images: files,
      count,
      showAddImg,
    });
  }

  handleImageClick = (index, file) => {
    const current = file.url;
    const { images } = this.state;
    const urls = images.map((item) => item.url);
    Taro.previewImage({
      current,
      urls
    });
  }

  handleClose = () => {
    this.setState({
      isOpened: false
    });
  }

  onTopicItemClick = (topicId, topicName) => {
    const { content } = this.state;
    let disabled = true;
    if (content.trim() !== '') {
      disabled = false;
    }
    this.setState({
      topicId,
      topicName,
      isOpened: false,
      disabled,
    });
  }

  // 提交
  submit = async () => {
    const { images, content, topicId } = this.state;
    this.setState({
      disabled: true,
      loading: true,
    })
    // 先上传图片文件
    let imageList = [];
    if (images.length !== 0) {
      const imgs = await Post.uploadImgs(images);
      imageList = imgs.map((item, index) => ({
        path: item,
        index
      }));
    }
    // 在访问后端，发起新建帖子请求
    const result = await Post.create(topicId, content, imageList);
    this.setState({
      disabled: false,
      loading: false,
    });
    if (result) { // 新建成功
      Taro.navigateBack();
    }
    
  }

  render() {
    const {
      content,
      topicId,
      images,
      isOpened,
      disabled,
      topicName,
      count,
      showAddImg,
      loading,
    } = this.state;
    const { submitText } = this.props;
    return (
      <View>
        <View className='form-item list-item' onClick={this.handleTopicClick}>
          <View className='left'># {topicId === 0 ? '选择话题' : topicName }</View>
          {
            topicId === 0 ?
            <View className='center'>选择合适的话题会有更多的赞哦~</View> : null
          }
          <AtIcon size='16' color='#989898' value='chevron-right' />
        </View>
        <View className='form-item'>
          <AtTextarea
            value={content}
            onChange={this.handleTextChange}
            maxLength={200}
            placeholder='记录真实的校园生活...'
          />
        </View>
        <View className='form-item image-picker'>
          <AtImagePicker
            mode='aspectFill'
            length={3}
            count={count}
            files={images}
            showAddBtn={showAddImg}
            onChange={this.handleImageChange}
            onImageClick={this.handleImageClick}
          />
        </View>
        <View className='form-item'>
          <AtButton onClick={this.submit} disabled={disabled} type='primary' loading={loading}>
            {submitText}
          </AtButton>
        </View>
        <AtFloatLayout 
          isOpened={isOpened}
          title='选择一个话题'
          onClose={this.handleClose}
        >
          <TopicList onTopicItemClick={this.onTopicItemClick} />
        </AtFloatLayout>
      </View>
    );
  }
}

export default PostEditor;
