import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';


class Button extends Component {

    render() {
        const { buttonStyle, textStyle } = styles;


        return (
            <TouchableOpacity onPress={this.props.onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRaduis: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
