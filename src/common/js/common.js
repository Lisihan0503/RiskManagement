/*
* @name：公共封装JS
* @author：陈成 2019-12-17
* @description：简化代码
*/

/**
 * popupMsg
 * 消息提示
 * @Author 陈成
 */
const popupMsg = (e, type, msg) => {
  e.$message({
    type: type,
    message: msg,
    customClass: 'zZindex'
  })
};
/**
 * 时间戳转 时间
 * @return function
 * @throws 年月日时分 星期几 时间
 * @Author 陈成
 */
const TimeYearMonthDay = (num, type) => {
  if (num != null) {
    var dd = new Date(num);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    var h = dd.getHours();
    var i = dd.getMinutes();
    var s = dd.getSeconds();
    m = m < 10 ? '0' + m : m;
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    i = i < 10 ? '0' + i : i;
    s = s < 10 ? '0' + s : s;
    if (type) {
      return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
    } else {
      return y + '-' + m + '-' + d
    }
  } else {
    return ''
  }
};
/**
 * 获取当前日期
 * @return function
 * @throws 年月日
 * @Author 陈成
 */
const getNowDate = () => {
  var day = new Date();
  var formatDate = function (date) {
    var y = day.getFullYear();
    var m = day.getMonth() + 1;
    m = m < 10 ? '0' + m : m;//这是判断月份是否小于10  如果小于在月份前面添加0  成05
    var d = day.getDate();
    d = d < 10 ? ('0' + d) : d;  //判断天数 也是一样的
    return y + '-' + m + '-' + d  //这里取到的格式是2018-06-01
  };
  var today = formatDate(Date());
  return today
};
/**
 * 获取当前日期前几天日期
 * @return function
 * @throws 年月日
 * @Author 陈成
 */
const getNowDatePrve = (AddDayCount) => {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;//获取当前月份的日期
  m = m < 10 ? '0' + m : m;
  var d = dd.getDate();
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d
};

/**
 * Date 日期格式化
 * @return function
 * @throws ‘yyyy-MM-dd’‘yyyy-MM-dd hh:mm’
 * @Author 陈成
 */
const formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }

  return fmt
};
/**
 * downloadFile
 * 下载文件
 * @Author 陈成
 */
const downloadSource = (data, filename, type) => {
  let blob = null;
  if (type == 1) {
    blob = new Blob([data], {type: 'application/vnd.ms-excel'})
  } else {
    blob = new Blob([data])
  }
  const fileName = filename;
  const elink = document.createElement('a');
  elink.download = fileName;
  elink.style.display = 'none';
  elink.href = URL.createObjectURL(blob);
  document.body.appendChild(elink);
  elink.click();
  URL.revokeObjectURL(elink.href);// 释放URL 对象
  document.body.removeChild(elink)
};
/**
 * 验证手机号
 * @return function
 * @throws  手机号格式验证：1开头，第二位可可以是3,4,5,6,7,8，11位
 * @Author 陈成
 */
const PhoneRules = ($poneInput) => {
  let _reg = null;
  var reg1 = /^1[3|4|5|6|7|8|9]\d{9}$/;
  if (reg1.test($poneInput)) {
    _reg = true
  } else {
    _reg = false
  }
  return _reg
};

/**
 * 导出各个方法
 * 如果单个组件中只引入其中一个或者几个方法的时候可以写成一下形式引入
 * import {xxx} from '@common/commcon'
 * 也可以写成一下形式作为引入(以对象形式)
 * improt * as common form '@common/commcon'
 * @Author 陈成
 */
export {
  TimeYearMonthDay,
  getNowDate,
  getNowDatePrve,
  downloadSource,
  formatDate,
  PhoneRules,
  popupMsg
}
