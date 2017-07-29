import React, { Component } from 'react';
import {
    ActivityIndicator,
    Dimensions
} from 'react-native'

const Common = {
    //数据请求
    getRequest: function (url, successCallBack, fillCallBack) {
        fetch(url)
            .then((Response) => Response.json())
            .then((responseDate) => successCallBack(responseDate))
            .catch((error) => fillCallBack(error))
    },
    //显示加载的页面
    loading: <ActivityIndicator style={{ marginTop: Dimensions.get('window').height / 3 }} size='large' color='red' />
}

export default Common;