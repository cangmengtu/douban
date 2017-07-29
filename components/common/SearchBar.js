import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    {...this.props}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={this.props.onPress}
                >
                    <Text style={styles.searchBtnText}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10
    },
    searchBtn: {
        width: 50,
        height: 40,
        backgroundColor: '#1CF529',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 10
    },
    searchBtnText: {
        color: 'white',
        fontSize: 16
    }
})

export default SearchBar;