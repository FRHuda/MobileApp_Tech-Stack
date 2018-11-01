import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common';

import LibraryList from './src/components/LibraryList';
import reducers from './src/reducers';

class App extends Component {
    render() {
        //Disabling Yellow Box ( Warning )
        console.disableYellowBox = true;

        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header headerText="Tech Stack" />
                    <LibraryList />
                </View>
            </Provider>
        );
    }
}

export default App;
