import axios from 'axios';
import * as commonApi from './commonApi';
import * as bannerApi from './bannerApi';
import * as heritageApi from './heritageApi';
import * as inheritorApi from './inheritorApi';
import * as storyApi from './storyApi';
import * as newsApi from './newsApi';
import * as triviaApi from './triviaApi';
import * as techniqueApi from './techniqueApi';
import * as mapApi from './mapApi';
import * as quizApi from './quizApi';
import * as diyApi from './diyApi';

// 创建 axios 实例
const api = axios.create({
  baseURL: '/api', // 模拟 API 基础路径
  timeout: 5000,
});

// 请求拦截器 - 可以在这里添加 token 等
api.interceptors.request.use(
  (config) => {
    // 模拟请求头
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 - 可以在这里处理错误
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// 统一导出 API 服务
export const apiService = {
  // Common
  getNavLinks: commonApi.getNavLinks,
  
  // Banner
  getBanners: bannerApi.getBanners,
  
  // Heritage
  getHeritageItems: heritageApi.getHeritageItems,
  getHeritageItemById: heritageApi.getHeritageItemById,
  
  // Inheritor
  getInheritors: inheritorApi.getInheritors,
  getInheritorById: inheritorApi.getInheritorById,
  
  // Story
  getStories: storyApi.getStories,
  
  // News
  getNews: newsApi.getNews,
  
  // Trivia
  getTrivias: triviaApi.getTrivias,
  
  // Technique
  getTechniques: techniqueApi.getTechniques,
  getTechniqueByTitle: techniqueApi.getTechniqueByTitle,
  
  // Map
  getMapData: mapApi.getMapData,
  
  // Quiz
  getQuizData: quizApi.getQuizData,
  
  // DIY
  getDiyData: diyApi.getDiyData,
};

export default api;

