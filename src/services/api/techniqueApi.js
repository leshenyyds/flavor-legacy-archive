import { TECHNIQUES } from '../../assets/data/techniqueData';

// 获取技艺分类列表
export const getTechniques = () => {
  return {
    data: TECHNIQUES,
    status: 200,
    message: 'success'
  };
};

// 根据标题获取单个技艺详情
export const getTechniqueByTitle = (title) => {
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

