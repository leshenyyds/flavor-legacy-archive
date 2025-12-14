import { NAV_LINKS } from '../../assets/data/commonData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取导航链接
export const getNavLinks = async () => {
  await delay(300);
  return {
    data: NAV_LINKS,
    status: 200,
    message: 'success'
  };
};

