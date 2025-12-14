import { BANNERS } from '../../assets/data/bannerData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取轮播图数据
export const getBanners = async () => {
  await delay(400);
  return {
    data: BANNERS,
    status: 200,
    message: 'success'
  };
};

