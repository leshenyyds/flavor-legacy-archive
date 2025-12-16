import { http, HttpResponse, delay } from 'msw';
import * as commonApi from '../services/api/commonApi';
import * as bannerApi from '../services/api/bannerApi';
import * as heritageApi from '../services/api/heritageApi';
import * as inheritorApi from '../services/api/inheritorApi';
import * as storyApi from '../services/api/storyApi';
import * as newsApi from '../services/api/newsApi';
import * as triviaApi from '../services/api/triviaApi';
import * as techniqueApi from '../services/api/techniqueApi';
import * as mapApi from '../services/api/mapApi';
import * as quizApi from '../services/api/quizApi';
import * as diyApi from '../services/api/diyApi';

export const handlers = [
  // 导航链接
  http.get('/api/nav-links', async () => {
    await delay(300);
    const mockData = commonApi.getNavLinks();
    return HttpResponse.json(mockData);
  }),

  // 轮播图
  http.get('/api/banners', async () => {
    await delay(400);
    const mockData = bannerApi.getBanners();
    return HttpResponse.json(mockData);
  }),

  // 非遗项目列表
  http.get('/api/heritage', async () => {
    await delay(500);
    const mockData = heritageApi.getHeritageItems();
    return HttpResponse.json(mockData);
  }),

  // 非遗项目详情
  http.get('/api/heritage/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const mockData = heritageApi.getHeritageItemById(id);
    return HttpResponse.json(mockData, { status: mockData.status });
  }),

  // 传承人列表
  http.get('/api/inheritors', async () => {
    await delay(400);
    const mockData = inheritorApi.getInheritors();
    return HttpResponse.json(mockData);
  }),

  // 传承人详情
  http.get('/api/inheritors/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const mockData = inheritorApi.getInheritorById(id);
    return HttpResponse.json(mockData, { status: mockData.status });
  }),

  // 故事列表
  http.get('/api/stories', async () => {
    await delay(400);
    const mockData = storyApi.getStories();
    return HttpResponse.json(mockData);
  }),

  // 新闻列表
  http.get('/api/news', async () => {
    await delay(300);
    const mockData = newsApi.getNews();
    return HttpResponse.json(mockData);
  }),

  // 民俗小知识
  http.get('/api/trivias', async () => {
    await delay(300);
    const mockData = triviaApi.getTrivias();
    return HttpResponse.json(mockData);
  }),

  // 技艺列表
  http.get('/api/techniques', async () => {
    await delay(400);
    const mockData = techniqueApi.getTechniques();
    return HttpResponse.json(mockData);
  }),

  // 技艺详情
  http.get('/api/techniques/:title', async ({ params }) => {
    await delay(500);
    const { title } = params;
    const decodedTitle = decodeURIComponent(title);
    const mockData = techniqueApi.getTechniqueByTitle(decodedTitle);
    return HttpResponse.json(mockData, { status: mockData.status });
  }),

  // 地图数据
  http.get('/api/map', async () => {
    await delay(400);
    const mockData = mapApi.getMapData();
    return HttpResponse.json(mockData);
  }),

  // 答题数据
  http.get('/api/quiz', async () => {
    await delay(300);
    const mockData = quizApi.getQuizData();
    return HttpResponse.json(mockData);
  }),

  // DIY 数据
  http.get('/api/diy', async () => {
    await delay(300);
    const mockData = diyApi.getDiyData();
    return HttpResponse.json(mockData);
  }),
];

