'use strict';
import { pendingOf, fulfilledOf } from '../utils/PromiseTypeSuffixes';
import * as ActionType from '../constants/V2EXActionType';

const initialState = {
  isFetching: false,
  isDone: false,
  data: {}
};

export default function V2EX(state = initialState, action) {
  if (/_PENDING$/.test(action.type)) {
    return Object.assign({}, state, {
      isFetching: true,
    });
  } else if (/_FULFILLED$/.test(action.type)) {
    return Object.assign({}, state, {
      isFetching: false,
      isDone: true,
      data: action.payload
    });
  } else {
    return state
  }
}
