'use strict'

import {combineReducers} from 'redux'
import ZhihuNews from './ZhihuNews'
import V2EX from './V2EX'

const rootReducer = combineReducers({
  ZhihuNews,
  V2EX
});

export default rootReducer;
