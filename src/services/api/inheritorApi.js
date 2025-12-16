import { INHERITORS } from '../../assets/data/inheritorData';

// 获取传承人列表
export const getInheritors = () => {
  return {
    data: INHERITORS,
    status: 200,
    message: 'success'
  };
};

// 根据 ID 获取单个传承人
export const getInheritorById = (id) => {
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

