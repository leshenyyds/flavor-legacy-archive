import { TRIVIAS } from '../../assets/data/triviaData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取民俗小知识列表
export const getTrivias = async () => {
  await delay(300);
  return {
    data: TRIVIAS,
    status: 200,
    message: 'success'
  };
};

