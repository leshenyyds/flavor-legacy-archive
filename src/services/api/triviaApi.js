import { TRIVIAS } from '../../assets/data/triviaData';

// 获取民俗小知识列表
export const getTrivias = () => {
  return {
    data: TRIVIAS,
    status: 200,
    message: 'success'
  };
};

