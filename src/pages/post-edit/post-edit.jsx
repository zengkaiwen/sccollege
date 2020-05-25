import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import PostEditor from '../../components/post-editor/post-editor';

import './post-edit.scss';

class PostEdit extends Component {

  config = {
    navigationBarTitleText: '发帖子',
  }

  render() {
    return (
      <View>
        <PostEditor submitText='发布' />
      </View>
    );
  }
}

export default PostEdit;
