'use strict';
export function GetZhihuNews(url) {
  return fetch('http://news-at.zhihu.com/api/4' + url)
          .then((response) => {
            if (response.status === 200) {
              return response.json()
            }
            return response.status;
          });
}

export function GetV2EX(url) {
  return fetch('https://www.v2ex.com/api' + url)
          .then((response) => {
            if (response.status === 200) {
              return response.json()
            }
            return response.status;
          });
}
