import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BookDetail from './components/books/BookDetail';
import MovieDetail from './components/movies/MovieDetail';
import TabBar from './components/tabBar/TabBar';

// 引导页
class LeadImg extends Component {
  static navigationOptions = {
    //title: '引导页',
    //header: <Text>引导页11</Text>
    //隐藏头部
    header: null
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
        style={styles.image}
        source={require('./images/lead.png')}
      />
      /* <Button title='按钮' onPress={() => navigate('Home')} />
    </Image> */
    );
  }
  //组件加载完成后加载
  componentDidMount() {
    ToastAndroid.show('1s后进入主页', ToastAndroid.SHORT);
    const { navigate } = this.props.navigation;
    setTimeout(() => navigate('Home'), 1000);
  }
}

const Douban = StackNavigator({
  LeadImg: { screen: LeadImg },
  Home: { screen: TabBar },
  BookDetail: { screen: BookDetail },
  MovieDetail: { screen: MovieDetail,navigationOptions:{header:null} }
})

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

AppRegistry.registerComponent('Douban', () => Douban);
