import { INHERITORS } from '../../assets/data/inheritorData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取传承人列表
export const getInheritors = async () => {
  await delay(400);
  return {
    data: INHERITORS,
    status: 200,
    message: 'success'
  };
};

// 根据 ID 获取单个传承人
export const getInheritorById = async (id) => {
  await delay(400);
  const inheritor = INHERITORS.find(p => p.id === id);
  if (!inheritor) {
    return {
      data: null,
      status: 404,
      message: 'Inheritor not found'
    };
  }
  return {
    data: inheritor,
    status: 200,
    message: 'success'
  };
};

