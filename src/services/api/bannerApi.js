import { BANNERS } from '../../assets/data/bannerData';

// 获取轮播图数据
export const getBanners = () => {
  return {
    data: BANNERS,
    status: 200,
    message: 'success'
  };
};

