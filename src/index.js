import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#333" />
            <Routes />
        </Provider>
    );
};

export default App;
