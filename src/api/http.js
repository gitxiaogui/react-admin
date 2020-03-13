import axios from 'axios'
import { message } from 'antd';
import { Route,Link,HashRouter  } from 'react-router-dom'
// 创建axios实例
const router = new HashRouter();
const service = axios.create({
  baseURL: 'http://pre.17kuxiu.com/mgmt/', // api 的 base_url
  // baseURL: 'api/', // api 的 base_url
  // timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers['accessToken'] = localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    /** code为非20000是抛错 可结合自己业务进行修改**/
    const res = response.data
    if (res.retCode !== 200) {
      //  -100007:Token 验证失败;
      if (res.retCode === -100007) {
        console.log(router)
        router.history.push('/login');
        message.info('登录超时');
      }else{
        message.info(res.retMsg);
      }
      return response.data
    } else {
      return response.data
    }
  },
  error => {
    // console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
