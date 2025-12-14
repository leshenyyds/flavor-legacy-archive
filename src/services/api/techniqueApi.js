import { TECHNIQUES, TECHNIQUE_COMPARISON, CRAFTSMAN_QUOTES } from '../../assets/data/techniqueData';

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

// 获取技艺对比数据
export const getTechniqueComparison = async () => {
  await delay(400);
  return {
    data: TECHNIQUE_COMPARISON,
    status: 200,
    message: 'success'
  };
};

// 获取匠人语录
export const getCraftsmanQuotes = async () => {
  await delay(300);
  return {
    data: CRAFTSMAN_QUOTES,
    status: 200,
    message: 'success'
  };
};

