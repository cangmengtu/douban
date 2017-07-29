import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Button style={styles.headerBtn} title="返回" onPress={() => this.props.navigation.goBack()} />
                <Text
                    style={styles.headerTxt}
                    numberOfLines={1}
                >{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#000'
    },
    headerBtn: {
        width: 60,
        height: 30
    },
    headerTxt: {
        flex: 1,
        fontSize: 24,
        color: 'red',
        textAlign: 'center'
    }
})