import { DIY_DATA } from '../../assets/data/diyData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取DIY教程数据
export const getDiyData = async () => {
  await delay(300);
  return {
    data: DIY_DATA,
    status: 200,
    message: 'success'
  };
};

