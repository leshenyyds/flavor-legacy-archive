import axios from 'axios';

// 创建 axios 实例（和生产环境一致）
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器 - 可以在这里添加 token 等
request.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 - 统一处理响应数据格式
request.interceptors.response.use(
  (response) => {
    // 返回格式：{ data: ..., status: ..., message: ... }
    return {
      data: response.data.data,
      status: response.data.status || response.status,
      message: response.data.message || 'success'
    };
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// 统一导出 API 服务 - 直接写 Axios 请求（和生产环境一致）
export const apiService = {
  // Common
  getNavLinks: () => request.get('/nav-links'),
  
  // Banner
  getBanners: () => request.get('/banners'),
  
  // Heritage
  getHeritageItems: () => request.get('/heritage'),
  getHeritageItemById: (id) => request.get(`/heritage/${id}`),
  
  // Inheritor
  getInheritors: () => request.get('/inheritors'),
  getInheritorById: (id) => request.get(`/inheritors/${id}`),
  
  // Story
  getStories: () => request.get('/stories'),
  
  // News
  getNews: () => request.get('/news'),
  
  // Trivia
  getTrivias: () => request.get('/trivias'),
  
  // Technique
  getTechniques: () => request.get('/techniques'),
  getTechniqueByTitle: (title) => request.get(`/techniques/${encodeURIComponent(title)}`),
  
  // Map
  getMapData: () => request.get('/map'),
  
  // Quiz
  getQuizData: () => request.get('/quiz'),
  
  // DIY
  getDiyData: () => request.get('/diy'),
};

