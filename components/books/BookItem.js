import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class BookItem extends Component {
    render() {
        const { book } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {/* 图片 */}
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: book.image }} />
                </View>
                {/* 图书文字信息 */}
                <View style={styles.contentContainer}>
                    {/* title */}
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    {/* 出版社 */}
                    <View style={styles.textContainer}>
                        <Text style={styles.publish_author}>{book.publisher}</Text>
                    </View>
                    {/* 作者 */}
                    <View style={styles.textContainer}>
                        <Text>{book.author}</Text>
                    </View>
                    {/* 价格以及页数 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages? book.pages+'页':''}</Text>
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
    publish_author: {
        color: '#3a3a3a',
        fontSize: 13,
    },
    price: {
        color: 'skyblue',
        fontSize: 16,
    },
    pages: {
        marginLeft: 10,
        color: 'red'
    }
})