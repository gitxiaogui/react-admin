import axios from './http';
import Qs from 'qs';

// 登录
export function login(params) {
  return axios.post('user/login',Qs.stringify(params))
}

// 获取用户信息管理
export function getUserManage(params){
  return axios.post('user/getUserInfoDetail/web',Qs.stringify(params))
}

// 消费查询
export function findGiftConsume(params){
  return axios.post('consume/findGiftConsume',Qs.stringify(params))
}