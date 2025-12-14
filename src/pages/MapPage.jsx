import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/Layout';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import mapImage from '../assets/image/大地图.png';
import '../assets/css/MapPage.css';

const MapPage = () => {
  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getMapData();
        setMapData(response.data);
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
            className="map-label" 
            style={label.position}
          >
            <strong className="text-red-800 block">{label.title}</strong>
            {label.content}
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-4">{mapData.analysis.title}</h3>
          <p className="text-stone-600">{mapData.analysis.content}</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-4">{mapData.route.title}</h3>
          <div className="flex items-center gap-2 text-sm text-stone-700">
            {mapData.route.days.map((item, index) => (
              <React.Fragment key={index}>
                <span 
                  className="bg-primary text-white px-2 rounded" 
                  style={{backgroundColor: 'var(--primary-color)'}}
                >
                  {item.day}
                </span>
                {item.place}
                {index < mapData.route.days.length - 1 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

