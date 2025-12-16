import { DIY_DATA } from '../../assets/data/diyData';

// 获取DIY教程数据
export const getDiyData = () => {
  return {
    data: DIY_DATA,
    status: 200,
    message: 'success'
  };
};

