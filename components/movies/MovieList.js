import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ToastAndroid,
    Dimensions
} from 'react-native';
import Common from '../common/Common';
import Service from '../common/Service';
import SearchBar from '../common/SearchBar';
import MovieItem from '../movies/MovieItem';

export default class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false,
            keyWords: '冰河',
            dataSource:[],
            count:20,
            start:0,
            search:true
        }
    }
    _getData=()=>{
        //发起数据请求,开启loading
        this.setState({
            show:true
        })
        //请求数据
        var url = `${Service.movie_search}?q=${this.state.keyWords}&count=${this.state.count}&start=${this.state.start}`;
        Common.getRequest(url,(data)=>{
            //请求成功的回调函数
            //{"count:13,"start":0,"total":13,"subjects":[]}
            //如果subjects不存在或者是长度为0
            if(!data.subjects || data.subjects.length == 0){
                ToastAndroid.show(this.state.search?'未找到相关电影':'没有更多书籍',ToastAndroid.SHORT);
            }
            this.setState({
                show:false,
                dataSource:this.state.dataSource.concat(data.subjects)
            })
        },(error)=>{
            //请求失败的回调函数
            alert(error);
        });
    }
    _changeText = (text) => {
        this.setState({
            keyWords:text
        })
    }
    _searchText = () => {
        this.setState({
            dataSource:[],
            start:0,
            search:true
        })
        this._getData();
    }
    _renderItem = ({ item }) => {
        const {navigate} =this.props.navigation;
        return <MovieItem subject={item} onPress={()=>navigate('MovieDetail',{url:item.alt,title:item.title})}/>
    }
    _onEndReached = () => {
        this.setState({
            start:this.state.start + this.state.count,
            search:false
        })
        this._getData();
    }
    render() {
        return (
            <View>
                <SearchBar
                    placeholder='请输入电影名字'
                    onChangeText={this._changeText}
                    onPress={this._searchText}
                />
                <FlatList
                    style={{height:Dimensions.get('window').height - 140}}
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.01}
                    onRefresh={()=>{}}
                    refreshing={this.state.show}
                />
            </View>
        );
    }
    componentDidMount() {
        this._getData();
        this.setState({
            start:this.state.start + this.state.count
        })
    }
}