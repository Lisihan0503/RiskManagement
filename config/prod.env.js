'use strict'
const target = process.env.npm_lifecycle_event
if (target == 'test') {
  //测试环境
  var obj = {
    NODE_ENV: '"test"',
    api: '"http://192.168.3.12:10010"', //数据字典
  }
} else if (target == 'build') {
  //正式环境
  var obj = {
    NODE_ENV: '"production"',
    api: '"http://iot.wl360.com/apix"',//post用当前域名
  }
} else if (target == 'dev') {
  //正式环境
  var obj = {
    NODE_ENV: '"production"',
    api: '"http://front2.wxcl.com/apix"',//post用当前域名
  }
}

module.exports = obj
