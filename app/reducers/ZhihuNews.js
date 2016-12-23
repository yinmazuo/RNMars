'use strict'
import { pendingOf, fulfilledOf } from '../utils/PromiseTypeSuffixes'
import * as ActionType from '../constants/ZhihuNewsActionType'

const initialState = {
  isFetching: false,
  data: {}
};

export default function ZhihuNews(state = initialState, action) {
  switch (action.type) {
    case pendingOf(ActionType.FETCH_LATEST_NEWS):
      return Object.assign({}, state, {
        isFetching: true
      });
    case fulfilledOf(ActionType.FETCH_LATEST_NEWS):
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      });
    case pendingOf(ActionType.FETCH_BEFORE_NEWS):
      return Object.assign({}, state, {
        isFetching: true
    });
    case fulfilledOf(ActionType.FETCH_BEFORE_NEWS):
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
    });

    default:
      return state
  }
}
