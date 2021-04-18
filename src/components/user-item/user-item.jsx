import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components';

import './user-item.scss'

class UserItem extends Component {

  goInfo = (e) => {
    e.stop;
  }

  render() {
    const {
      info,
      renderLeft = null,
      renderCenter = null
    } = this.props;
    return (
      <View className='user' onClick={this.goInfo}>
        <View className='left'>
          {renderLeft}
        </View>
        <View className='avtater'>
          <Image src={info.avatar} />
        </View>
        <View className='info'>
          <View className='info-content'>
            <View className='nick'>{info.user_nickname}</View>
            {
              info.user_type === 3 ? (
                <Image
                  className='ic-img'
                  src='../../images/ic_auth.svg'
                />
              ) : info.user_type === 4 ? (
                <Image
                  className='ic-img'
                  src='../../images/ic_sys.svg'
                />
              ) : info.user_type === 5 ? (
                <Image
                  className='ic-img'
                  src='../../images/ic_writer.svg'
                />
              ) : null
            }
            <View className='info-content-more'>
              {renderCenter}
            </View>
          </View>
          <View className='info-des'>
            {
              info.user_type === 3 ? (
                <Text>{info.title || info.school}</Text>
              ) : (
                <Text>{info.sex}·{info.title || info.school || '川内某大学'}</Text>
              )
            }
          </View>
        </View>
        <View className='action'>
          <slot name='action' />
        </View>
      </View>
    );
  }
}

export default UserItem;
