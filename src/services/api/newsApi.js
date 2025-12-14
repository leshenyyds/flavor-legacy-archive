import { NEWS } from '../../assets/data/newsData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取新闻列表
export const getNews = async () => {
  await delay(300);
  return {
    data: NEWS,
    status: 200,
    message: 'success'
  };
};

