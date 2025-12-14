import { MAP_DATA } from '../../assets/data/mapData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取地图数据
export const getMapData = async () => {
  await delay(400);
  return {
    data: MAP_DATA,
    status: 200,
    message: 'success'
  };
};

