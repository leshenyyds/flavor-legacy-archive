import { http, HttpResponse, delay } from 'msw';
import { NAV_LINKS } from '../assets/data/commonData';
import { BANNERS } from '../assets/data/bannerData';
import { HERITAGE_ITEMS } from '../assets/data/heritageData';
import { INHERITORS } from '../assets/data/inheritorData';
import { STORIES } from '../assets/data/storyData';
import { NEWS } from '../assets/data/newsData';
import { TRIVIAS } from '../assets/data/triviaData';
import { TECHNIQUES } from '../assets/data/techniqueData';
import { MAP_DATA } from '../assets/data/mapData';
import { QUIZ_DATA } from '../assets/data/quizData';
import { DIY_DATA } from '../assets/data/diyData';

export const handlers = [
  // 导航链接
  http.get('/api/nav-links', async () => {
    await delay(300);
    return HttpResponse.json({
      data: NAV_LINKS,
      status: 200,
      message: 'success'
    });
  }),

  // 轮播图
  http.get('/api/banners', async () => {
    await delay(400);
    return HttpResponse.json({
      data: BANNERS,
      status: 200,
      message: 'success'
    });
  }),

  // 非遗项目列表
  http.get('/api/heritage', async () => {
    await delay(500);
    return HttpResponse.json({
      data: HERITAGE_ITEMS,
      status: 200,
      message: 'success'
    });
  }),

  // 非遗项目详情
  http.get('/api/heritage/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const item = HERITAGE_ITEMS.find(item => item.id === id);
    if (!item) {
      return HttpResponse.json({
        data: null,
        status: 404,
        message: 'Item not found'
      }, { status: 404 });
    }
    return HttpResponse.json({
      data: item,
      status: 200,
      message: 'success'
    });
  }),

  // 传承人列表
  http.get('/api/inheritors', async () => {
    await delay(400);
    return HttpResponse.json({
      data: INHERITORS,
      status: 200,
      message: 'success'
    });
  }),

  // 传承人详情
  http.get('/api/inheritors/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const inheritor = INHERITORS.find(p => p.id === id);
    if (!inheritor) {
      return HttpResponse.json({
        data: null,
        status: 404,
        message: 'Inheritor not found'
      }, { status: 404 });
    }
    return HttpResponse.json({
      data: inheritor,
      status: 200,
      message: 'success'
    });
  }),

  // 故事列表
  http.get('/api/stories', async () => {
    await delay(400);
    return HttpResponse.json({
      data: STORIES,
      status: 200,
      message: 'success'
    });
  }),

  // 新闻列表
  http.get('/api/news', async () => {
    await delay(300);
    return HttpResponse.json({
      data: NEWS,
      status: 200,
      message: 'success'
    });
  }),

  // 民俗小知识
  http.get('/api/trivias', async () => {
    await delay(300);
    return HttpResponse.json({
      data: TRIVIAS,
      status: 200,
      message: 'success'
    });
  }),

  // 技艺列表
  http.get('/api/techniques', async () => {
    await delay(400);
    return HttpResponse.json({
      data: TECHNIQUES,
      status: 200,
      message: 'success'
    });
  }),

  // 技艺详情
  http.get('/api/techniques/:title', async ({ params }) => {
    await delay(500);
    const { title } = params;
    const decodedTitle = decodeURIComponent(title);
    const technique = TECHNIQUES.find(t => t.title === decodedTitle);
    if (!technique) {
      return HttpResponse.json({
        data: null,
        status: 404,
        message: 'Technique not found'
      }, { status: 404 });
    }
    return HttpResponse.json({
      data: technique,
      status: 200,
      message: 'success'
    });
  }),

  // 地图数据
  http.get('/api/map', async () => {
    await delay(400);
    return HttpResponse.json({
      data: MAP_DATA,
      status: 200,
      message: 'success'
    });
  }),

  // 答题数据
  http.get('/api/quiz', async () => {
    await delay(300);
    return HttpResponse.json({
      data: QUIZ_DATA,
      status: 200,
      message: 'success'
    });
  }),

  // DIY 数据
  http.get('/api/diy', async () => {
    await delay(300);
    return HttpResponse.json({
      data: DIY_DATA,
      status: 200,
      message: 'success'
    });
  }),
];

