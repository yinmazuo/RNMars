'use strict';

import * as actiontype from '../constants/ZhihuNewsActionType';
import * as httpService from '../utils/HttpService';

export function fetchLatestNews() {
  return {
    type: actiontype.FETCH_LATEST_NEWS,
    payload: httpService.GetZhihuNews('/news/latest')
  };
}

export function fetchBeforeNews(dateStr) {
  return {
    type: actiontype.FETCH_BEFORE_NEWS,
    payload: httpService.GetZhihuNews('/news/before/' + dateStr)
  }
}
