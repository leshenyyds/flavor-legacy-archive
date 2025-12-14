import { TECHNIQUES } from '../../assets/data/techniqueData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取技艺分类列表
export const getTechniques = async () => {
  await delay(400);
  return {
    data: TECHNIQUES,
    status: 200,
    message: 'success'
  };
};

// 根据标题获取单个技艺详情
export const getTechniqueByTitle = async (title) => {
  await delay(500);
  const technique = TECHNIQUES.find(t => t.title === title);
  if (!technique) {
    return {
      data: null,
      status: 404,
      message: 'Technique not found'
    };
  }
  return {
    data: technique,
    status: 200,
    message: 'success'
  };
};

