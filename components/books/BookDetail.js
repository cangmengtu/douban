import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    BackHandler
} from 'react-native';

import Common from '../common/Common';
import Service from '../common/Service'

export default class BookDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title,
            headerTitleStyle: {
                alignSelf: 'center',
                fontSize: 24,
                color:'red',
            },
            headerStyle: {
                paddingHorizontal: 10,
                borderBottomWidth:StyleSheet.hairlineWidth,
                borderColor:'#000'
            },
            headerLeft: <Button title="返回" onPress={() => navigation.goBack()}></Button>
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            bookData: null//图书的详细信息
        }
    }
    _getData() {
        var that = this;
        var url = `${Service.book_detail_id}${this.props.navigation.state.params.bookId}`;
        Common.getRequest(url, (data) => {
            that.setState({
                bookData: data
            })
        }, (error) => {
            alert(error);
        });
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
        this.props.navigation.goBack();
        return true;// 取消默认行为
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.bookData ?
                        <View>
                            <Text style={{textAlign:'center',fontSize:16}}>{this.state.bookData.title}</Text>
                            <ScrollView>
                                {/*图书简介*/}
                                <View>
                                    <Text style={styles.title}>图书简介</Text>
                                    <Text style={styles.text}>{this.state.bookData.summary}</Text>
                                </View>
                                {/*作者简介  */}
                                <View>
                                    <Text style={styles.title}>作者简介</Text>
                                    <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                                </View>
                            </ScrollView>
                        </View>
                        : Common.loading
                }
            </View>
        );
    }
    componentDidMount() {
        this._getData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        marginVertical: 10,
        marginLeft: 10,
        fontWeight: "bold"
    },
    text: {
        marginHorizontal: 10,
        color: '#000'
    }
})