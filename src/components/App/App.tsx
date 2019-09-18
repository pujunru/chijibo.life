import React from 'react'

import './App.css';
import AppRoute from './Route';
import { Provider } from 'react-redux';
import configureStore from '../../config/store';
import { Store } from 'redux';

const store: Store = configureStore(undefined)

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppRoute />
        </Provider>
    )
}

export default App
