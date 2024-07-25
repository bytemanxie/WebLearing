import axios from 'axios';

// 创建 axios 实例并设置全局配置
const axiosInstance = axios.create({
    baseURL: 'https://app165.acapp.acwing.com.cn',
    timeout: 5000,
});


// 响应拦截器
axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        console.error('Server Error:', error.response.data);
    } else if (error.request) {
        console.error('Network Error:', error.request);
    } else {
        console.error('Error:', error.message);
    }
    return Promise.reject(error);
});

export default axiosInstance;
