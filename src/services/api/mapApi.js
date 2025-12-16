import { MAP_DATA } from '../../assets/data/mapData';

// 获取地图数据
export const getMapData = () => {
  return {
    data: MAP_DATA,
    status: 200,
    message: 'success'
  };
};

