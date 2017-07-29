import React, { Component } from 'react';
import {
    View,
    WebView,
    BackHandler
} from 'react-native';

import Common from '../common/Common';
import Service from '../common/Service';
import Header from '../common/Header';

export default class BookDetail extends Component {
    componentWillMount() {
        //要在组件加载前写监听
        //添加物理返回键的监听事件 hardwareBackPress 一个固定事件
        BackHandler.addEventListener('hardwareBackPress',this._BackAndroid);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress',this._BackAndroid);
    }
    _BackAndroid=()=>{
        this.props.navigation.goBack();
        return true;// 取消默认行为
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1,backgroundColor:"#FFF"}}>
                <Header
                    navigation={navigation}
                    title={navigation.state.params.title}
                />
                <WebView
                    source={{uri:navigation.state.params.url}}
                />
            </View>
        );
    }
}
