import { NEWS } from '../../assets/data/newsData';

// 获取新闻列表
export const getNews = () => {
  return {
    data: NEWS,
    status: 200,
    message: 'success'
  };
};

