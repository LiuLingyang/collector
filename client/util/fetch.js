let fetchBase = require('isomorphic-fetch');
let _ = require('./util');

/**
 * 建议所有的产品都为xhr设置一个统一入口， 方便加上统一逻辑. 
 */
function fetch(url, opt = {}) {
  opt.method = opt.method || 'GET';
  opt.credentials = 'same-origin';

  //根据规范， 我们fix一些参数
  if (opt.data) {
    if (/GET|HEAD/i.test(opt.method)) {
      url = `${url}?${_.obj2query(opt.data)}`;
    } else {
      opt.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      opt.body = JSON.stringify(opt.data);
    }
  }

  return fetchBase(url, opt)
    .then(response => {
      if (!response.ok) {
        const error = new Error('Http Request Error');
        error.response = response;
        throw error;
      }
      if (opt.raw) {
        return response.text();
      } else {
        return response.json().then((json) => {
          switch (json.code) {
            case 200:
              return json.data;
            default:
              throw json.msg;
          }
        })
      }
    })
    .catch(err => {
      throw err;
    })
}

module.exports = fetch
