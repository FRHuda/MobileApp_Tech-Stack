import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager,
    Platform
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        LayoutAnimation.spring();
    }

    renderDescription() {
        const { expanded, library } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { title, id } = this.props.library;
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
