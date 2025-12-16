import { STORIES } from '../../assets/data/storyData';

// 获取故事列表
export const getStories = () => {
  return {
    data: STORIES,
    status: 200,
    message: 'success'
  };
};

