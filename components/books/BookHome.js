import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  BackHandler,
  ToastAndroid
} from 'react-native';
import BookList from './BookList';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      //title: '主页',
      //headerTitle: <Text>主页</Text>
      //headerTitle:'主页1'
      //头部右边
      headerRight: <Text>Right</Text>,
      //头部左边
      headerLeft: <Button title="返回" onPress={() => navigation.goBack()} />,
      //整个头部样式
      headerStyle: {
        backgroundColor: 'yellow',
        paddingHorizontal: 20
      },
      //标题样式
      headerTitleStyle: {
        //color:'red',
        alignSelf: 'center'
      },
      /* headerBackTitleStyle:{
        backgroundColor:'yellow'
      } */
      //标题颜色，也可以在标题样式中直接设置color
      headerTintColor: 'lime',
      header: null
    }
  }
  componentWillMount() {
    //要在组件加载前写监听
    //添加物理返回键的监听事件 hardwareBackPress 一个固定事件
    BackHandler.addEventListener('hardwareBackPress',this._BackAndroid);
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress',this._BackAndroid);
  }
  _BackAndroid=()=>{
    if(this.lastBackPressed && this.lastBackPressed + 2000 >=Date.now()){
      BackHandler.exitApp();
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
    return true;// 取消默认行为
  }
  render() {
    return (
      <View>
        <BookList navigation={this.props.navigation}/>
      </View>
    )
  }
}