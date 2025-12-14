import { STORIES } from '../../assets/data/storyData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取故事列表
export const getStories = async () => {
  await delay(400);
  return {
    data: STORIES,
    status: 200,
    message: 'success'
  };
};

