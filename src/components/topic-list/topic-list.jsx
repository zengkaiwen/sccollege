import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';

import './topic-list.scss';

import { Topic } from '../../common/api';

class TopicList extends Component {

  state = {
    searchVal: '',
    list: [],
    cacheList: [],
  }

  componentDidMount() {
    this.init();
  }

  init = async () => {
    const list = await Topic.getTopicList();
    if (list) {
      this.setState({
        list,
        cacheList: list,
      });
    }
  }

  onSearchChange = (value) => {
    const { cacheList } = this.state;
    this.setState({
      searchVal: value,
    });
    if (value === '') {
      this.setState({
        list: cacheList
      });
    }
  }

  onSearchClick = () => {
    const { searchVal, cacheList } = this.state;
    const newList = cacheList.filter((item) => {
      const { title } = item;
      if (title.indexOf(searchVal) !== -1) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      list: newList
    });
  }

  itemClick = (id, name) => {
    const { onTopicItemClick } = this.props;
    if ( typeof onTopicItemClick === 'function') {
      onTopicItemClick(id, name);
    }
  }

  render() {
    const { searchVal, list, cacheList } = this.state;
    const { des } = this.props;
    return (
      <View className='wrap'>
        {
          cacheList.length !== 0 && (
            <AtSearchBar
              value={searchVal}
              onChange={this.onSearchChange}
              onActionClick={this.onSearchClick}
            />
          )
        }
        <View className='list'>
          {
            list.map((item) => (
              <View
                className='item'
                key={item.id}
                onClick={() => this.itemClick(item.id, item.title)}
              >
                <Image className='img' src={item.icon_path} />
                <View className='item-content'>
                  <View className='item-title'>{item.title}</View>
                  <View className='item-des'>{item.des}</View>
                </View>
                <Text className='item-follow'>{`${item.follow_count}${item.follow_name}`}</Text>
              </View>
            ))
          }
        </View>
        {
          list.length !== 0 && (
            <View className='des'>{des}</View>
          )
        }
      </View>
    )
  }
}

export default TopicList;
