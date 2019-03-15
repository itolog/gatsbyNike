import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/createStore';

export default ({ element }) => <Provider store={store}>{element}</Provider>;
