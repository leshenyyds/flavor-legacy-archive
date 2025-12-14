import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import mapImage from '../assets/image/大地图.png';
import '../assets/css/MapPage.css';

const MapPage = () => {
  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getMapData();
        setMapData(response.data);
        // 默认选中第一个标签
        if (response.data && response.data.labels && response.data.labels.length > 0) {
          setSelectedLabel(response.data.labels[0]);
        }
      } catch (error) {
        console.error('Failed to fetch map data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading text="正在加载数据..." />;
  }

  if (!mapData) {
    return null;
  }

  return (
    <div className="map-container">
      <SectionTitle title="非遗美食地图" subtitle="探索中华大地的味觉版图" />
      <div className="map-viz">
        <img src={mapImage} alt="非遗美食地图" className="map-image" />
        {mapData.labels.map(label => (
          <div 
            key={label.id} 
            className={`map-label ${selectedLabel?.id === label.id ? 'active' : ''}`}
            style={label.position}
            onClick={() => setSelectedLabel(label)}
          >
            <strong className="text-red-800 block">{label.title}</strong>
            {label.content}
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="bg-white p-6 rounded shadow max-w-2xl w-full">
          <h3 className="font-bold mb-4">{selectedLabel ? `${selectedLabel.title}解析` : '美食带解析'}</h3>
          <p className="text-stone-600">{selectedLabel?.analysis || '请点击地图上的标签查看解析'}</p>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

