/*!
 * Name: Axios 方法库 目前只有 get post
 * Date: 2019-12-17
 * Copyright: Copyright (c) 2019
 * @author : 陈 成
 * @version : 1.00
 */
import axios from 'axios'
import router from '../router'

//网络请求地址
axios.defaults.baseURL = `${process.env.api}/`;
//图片回显路径
var _ImgBaseUrl = `${process.env.api}/`;


axios.defaults.headers.post['Content-Type'] = 'application/json';

let _token = window.sessionStorage.getItem('_token');

/**
 *  GET 请求
 * @param url
 * @param data
 * @returns {Promise}
 * */
export default {
  fetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params,
        headers: {'Authorization': _token}
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response.status != 200) {
          if (error.response.data == 50000) {
            reject(error.response.data)
            router.push({
              path: '/'
            })
          }
        }
      })
    })
  },
  /**
   *  POST 请求
   * @param url
   * @param data
   * @returns {Promise}
   * */
  fetchPost(url, params = {}) {
    /*
    axios post请求后端接收不到参数问题：

    解决方案一：有效，但是兼容性不是很好，不是所有浏览器都支持
        let data = new URLSearchParams()
        for (var key in params) {
            data.append(key, params[key])
        }
    */

    // 解决方案二：使用qs模块(axios中自带),使用qs.stringify()序列化params
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {
          'Authorization': _token
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response.status != 200) {
          if (error.response.data == 50000) {
            reject(error.response.data)
            // alert("判断这个" + error.response.data + "值跳转到登录页面");
            router.push({
              path: '/'
            })
          } else {

          }
        }
      })

    })
  },
  /**
   *  POST 请求  ContentType
   * @param url
   * @param data
   * @returns {Promise}
   * */
  fetchPostContentType(url, params = {}) {
    /*
    axios post请求后端接收不到参数问题：

    解决方案一：有效，但是兼容性不是很好，不是所有浏览器都支持
        let data = new URLSearchParams()
        for (var key in params) {
            data.append(key, params[key])
        }
    */

    // 解决方案二：使用qs模块(axios中自带),使用qs.stringify()序列化params
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {
          'Authorization': _token,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response.status != 200) {
          if (error.response.data == 50000) {
            reject(error.response.data)
            // alert("判断这个" + error.response.data + "值跳转到登录页面");
            router.push({
              path: '/'
            })
          } else {

          }
        }
      })

    })
  },
  /**
   * POST请求上传
   * @param url
   * @param params
   * @returns {Promise}
   */
  fetchPostUpload(url, params = {}) {
    /*
    axios post请求后端接收不到参数问题：

    解决方案一：有效，但是兼容性不是很好，不是所有浏览器都支持
        let data = new URLSearchParams()
        for (var key in params) {
            data.append(key, params[key])
        }
    */

    // 解决方案二：使用qs模块(axios中自带),使用qs.stringify()序列化params
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {
          'Authorization': _token,
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response.status != 200) {
          if (error.response.data == 50000) {
            reject(error.response.data)
            // alert("判断这个" + error.response.data + "值跳转到登录页面");
            router.push({
              path: '/'
            })
          } else {

          }
        }
      })

    })
  },

  /**
   * 展示图片
   * @Author 陈成
   */
  fetchPostShowPic(url, params = {}) {
    /*
    axios post请求后端接收不到参数问题：

    解决方案一：有效，但是兼容性不是很好，不是所有浏览器都支持
        let data = new URLSearchParams()
        for (var key in params) {
            data.append(key, params[key])
        }
    */

    // 解决方案二：使用qs模块(axios中自带),使用qs.stringify()序列化params
    return new Promise((resolve, reject) => {
      axios.post(url, params, {headers: {'Authorization': _token}, 'responseType': 'arraybuffer'}).then(res => {
        resolve('data:image/png;base64,' + btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')))
      }).catch(error => {
        if (error.response.status != 200) {
          if (error.response.data == 50000) {
            reject(error.response.data)
            // alert("判断这个" + error.response.data + "值跳转到登录页面");
            router.push({
              path: '/'
            })
          } else {

          }
        }
      })

    })
  },

  /**
   * POST请求下载
   * @param url
   * @param params
   * @returns {Promise}
   */
  fetchPostDownload(url, params = {}) {
    /*
        axios post请求后端接收不到参数问题：

        解决方案一：有效，但是兼容性不是很好，不是所有浏览器都支持
            let data = new URLSearchParams()
            for (var key in params) {
                data.append(key, params[key])
            }
        */

    // 解决方案二：使用qs模块(axios中自带),使用qs.stringify()序列化params
    return new Promise((resolve, reject) => {
      axios.post(url, params, {headers: {'Authorization': _token}, responseType: 'blob'},).then(res => {
        resolve(res.data)
      }).catch(error => {
        if (error.response.status != 200) {
          if (error.response.data == 50000) {
            reject(error.response.data)
            // alert("判断这个" + error.response.data + "值跳转到登录页面");
            router.push({
              path: '/'
            })
          } else {

          }
        }
      })

    })
  }
}









