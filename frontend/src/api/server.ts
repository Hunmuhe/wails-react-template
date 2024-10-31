// lib/axios.ts
import axios from 'axios';

const service = axios.create({
  timeout: 10000, // 设置请求超时
});

service.interceptors.request.use(
  (config) => {
      config.headers.authorization = localStorage.getItem('token') || '';
      return config;
  },
  (error) => {
      return Promise.reject();
  }
);


export default service;