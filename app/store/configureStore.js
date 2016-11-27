'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/index';

let store = (initialState) => {
    const store = createStore(rootReducer, initialState,
                    applyMiddleware(thunkMiddleware, promiseMiddleware())
                  );
    return store;
};

export default store;
