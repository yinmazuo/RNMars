'use strict';
import { pendingOf, fulfilledOf } from '../utils/ActionTypePromiseSuffix';
import * as actiontype from '../constants/ZhihuNewsActionType';

const initialState = {
  isFetching: false,
  data: {}
};

export default function ZhihuNews(state = initialState, action) {
  switch (action.type) {
    case pendingOf(actiontype.FETCH_LATEST_NEWS):
      return Object.assign({}, state, {
        isFetching: true
      });
    case fulfilledOf(actiontype.FETCH_LATEST_NEWS):
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      });
    case pendingOf(actiontype.FETCH_BEFORE_NEWS):
      return Object.assign({}, state, {
        isFetching: true
    });
    case fulfilledOf(actiontype.FETCH_BEFORE_NEWS):
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
    });

    default:
      return state;
  }
}
