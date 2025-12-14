import axios from 'axios';
import {
  NAV_LINKS,
  BANNERS,
  HERITAGE_ITEMS,
  INHERITORS,
  STORIES,
  NEWS,
  TRIVIAS,
  TECHNIQUES,
  TECHNIQUE_COMPARISON,
  CRAFTSMAN_QUOTES,
  MAP_DATA,
  QUIZ_DATA,
  DIY_DATA
} from '../constants';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

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

// API 服务方法
export const apiService = {
  // 获取导航链接
  getNavLinks: async () => {
    await delay(300);
    return {
      data: NAV_LINKS,
      status: 200,
      message: 'success'
    };
  },

  // 获取轮播图数据
  getBanners: async () => {
    await delay(400);
    return {
      data: BANNERS,
      status: 200,
      message: 'success'
    };
  },

  // 获取所有非遗项目
  getHeritageItems: async () => {
    await delay(500);
    return {
      data: HERITAGE_ITEMS,
      status: 200,
      message: 'success'
    };
  },

  // 根据 ID 获取单个非遗项目
  getHeritageItemById: async (id) => {
    await delay(400);
    const item = HERITAGE_ITEMS.find(item => item.id === id);
    if (!item) {
      return {
        data: null,
        status: 404,
        message: 'Item not found'
      };
    }
    return {
      data: item,
      status: 200,
      message: 'success'
    };
  },

  // 获取传承人列表
  getInheritors: async () => {
    await delay(400);
    return {
      data: INHERITORS,
      status: 200,
      message: 'success'
    };
  },

  // 根据 ID 获取单个传承人
  getInheritorById: async (id) => {
    await delay(400);
    const inheritor = INHERITORS.find(p => p.id === id);
    if (!inheritor) {
      return {
        data: null,
        status: 404,
        message: 'Inheritor not found'
      };
    }
    return {
      data: inheritor,
      status: 200,
      message: 'success'
    };
  },

  // 获取故事列表
  getStories: async () => {
    await delay(400);
    return {
      data: STORIES,
      status: 200,
      message: 'success'
    };
  },

  // 获取新闻列表
  getNews: async () => {
    await delay(300);
    return {
      data: NEWS,
      status: 200,
      message: 'success'
    };
  },

  // 获取民俗小知识列表
  getTrivias: async () => {
    await delay(300);
    return {
      data: TRIVIAS,
      status: 200,
      message: 'success'
    };
  },

  // 获取技艺分类列表
  getTechniques: async () => {
    await delay(400);
    return {
      data: TECHNIQUES,
      status: 200,
      message: 'success'
    };
  },

  // 获取技艺对比数据
  getTechniqueComparison: async () => {
    await delay(400);
    return {
      data: TECHNIQUE_COMPARISON,
      status: 200,
      message: 'success'
    };
  },

  // 获取匠人语录
  getCraftsmanQuotes: async () => {
    await delay(300);
    return {
      data: CRAFTSMAN_QUOTES,
      status: 200,
      message: 'success'
    };
  },

  // 获取地图数据
  getMapData: async () => {
    await delay(400);
    return {
      data: MAP_DATA,
      status: 200,
      message: 'success'
    };
  },

  // 获取题目数据
  getQuizData: async () => {
    await delay(300);
    return {
      data: QUIZ_DATA,
      status: 200,
      message: 'success'
    };
  },

  // 获取DIY教程数据
  getDiyData: async () => {
    await delay(300);
    return {
      data: DIY_DATA,
      status: 200,
      message: 'success'
    };
  },
};

export default api;

