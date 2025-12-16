import { HERITAGE_ITEMS } from '../../assets/data/heritageData';

// 获取所有非遗项目
export const getHeritageItems = () => {
  return {
    data: HERITAGE_ITEMS,
    status: 200,
    message: 'success'
  };
};

// 根据 ID 获取单个非遗项目
export const getHeritageItemById = (id) => {
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
};

