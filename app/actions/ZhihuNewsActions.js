'use strict';

import * as Actiontype from '../constants/ZhihuNewsActionType';
import * as HttpService from '../utils/HttpService';

export function fetchLatestNews() {
  return {
    type: Actiontype.FETCH_LATEST_NEWS,
    payload: HttpService.GetZhihuNews('/news/latest')
  };
}

export function fetchBeforeNews(dateStr) {
  return {
    type: Actiontype.FETCH_BEFORE_NEWS,
    payload: HttpService.GetZhihuNews('/news/before/' + dateStr)
  }
}
