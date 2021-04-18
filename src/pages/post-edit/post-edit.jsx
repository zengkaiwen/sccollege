import React, { Component } from 'react';
import { View } from '@tarojs/components';

import PostEditor from '../../components/post-editor/post-editor';

import './post-edit.scss';

class PostEdit extends Component {

  render() {
    return (
      <View>
        <PostEditor submitText='发布' />
      </View>
    );
  }
}

export default PostEdit;
