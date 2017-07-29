import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class MovieItem extends Component {
    render() {
        const { subject } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {/* 图像 */}
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: subject.images.small }} />
                </View>
                {/* 电影文字信息 */}
                <View style={styles.contentContainer}>
                    {/* title */}
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{subject.title}</Text>
                    </View>
                    {/* 演员 */}
                    <View style={{ flexDirection: 'row'}}>
                        {subject.casts? subject.casts.map((item,index)=>(<View style={{ flexDirection: 'row'}} key={index}><Text style={{paddingRight:10}}>{item.name}</Text><Text style={{paddingRight:10}}>{index != subject.casts.length-1 ? '|' : ''}</Text></View>)):''}
                    </View>
                    {/* 上映时间 */}
                    <View style={styles.textContainer}>
                        <Text style={styles.casts_year}>{subject.year}</Text>
                    </View>
                    {/* 分类以及评分 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.genres}>{subject.genres.join(" | ")}</Text>
                        <Text style={styles.ratingAverage}>{subject.rating.average+'分'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        padding: 10,
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 80,
        height: 100,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    casts_year: {
        color: '#3a3a3a',
        fontSize: 13,
    },
    genres: {
        color: '#2BB2A3',
        fontSize: 16,
    },
    ratingAverage: {
        marginLeft: 10,
        color: '#A70A0A'
    }
})