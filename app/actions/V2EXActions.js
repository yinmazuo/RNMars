'use strict';

import * as Actiontype from '../constants/V2EXActionType';
import * as HttpService from '../utils/HttpService';

export function fetchAllNodes() {
  return {
    type: Actiontype.FETCH_ALL_NODES,
    payload: HttpService.GetV2EX('/nodes/all.json')
  };
}

export function fetchNodeInfo(params) {
  let q = '?'
  if (params.id) {
    q += ('id=' + params.id)
  } else if (params.name) {
    q += ('name=' + params.name)
  }
  return {
    type: Actiontype.FETCH_ALL_NODES,
    payload: HttpService.GetV2EX('/nodes/all.json' + q)
  };
}

export function fetchLatestTopics() {
  return {
    type: Actiontype.FETCH_LATEST_TOPICS,
    payload: HttpService.GetV2EX('/topics/latest.json')
  };
}

export function fetchHotTopics() {
  return {
    type: Actiontype.FETCH_HOT_TOPICS,
    payload: HttpService.GetV2EX('/topics/hot.json')
  }
}

export function fetchTopicInfo(id) {
  return {
    type: Actiontype.FETCH_TOPICS_INFO,
    payload: HttpService.GetV2EX('/topics/show.json?id=' + id)
  }
}

export function fetchTopics(params) {
  let q = '?'
  if (params.username) {
    q += ('username=' + params.username)
  } else if (params.node_id) {
    q += ('node_id=' + params.node_id)
  } else if (params.node_name) {
    q += ('node_name=' + params.node_name)
  }
  return {
    type: Actiontype.FETCH_TOPICS,
    payload: HttpService.GetV2EX('/topics/show.json' + q)
  }
}

export function fetchTopicReplies(topic_id) {
  return {
    type: Actiontype.FETCH_TOPIC_REPLIES,
    payload: HttpService.GetV2EX('/replies/show.json?topic_id=' + topic_id)
  }
}

export function fetchMemberInfo(username) {
  return {
    type: Actiontype.FETCH_MEMBER_INFO,
    payload: HttpService.GetV2EX('/members/show.json?username=' + username)
  }
}
