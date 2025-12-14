import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/Layout';
import { FilterSection } from '../components/FilterSection';
import { HeritageCard } from '../components/HeritageCard';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import '../assets/css/Archive.css';

const Archive = () => {
  const [loading, setLoading] = useState(true);
  const [heritageItems, setHeritageItems] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [regionFilter, setRegionFilter] = useState('全部');

  const categories = ['全部', '烹饪技艺', '面点制作', '酱料制作', '茶酒酿造', '特色小吃'];
  const regions = ['全部', '华北', '华东', '华南', '西南', '西北', '东北'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getHeritageItems();
        setHeritageItems(response.data);
      } catch (error) {
        console.error('Failed to fetch heritage items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = heritageItems.filter(item => {
    return (categoryFilter === '全部' || item.category === categoryFilter) &&
           (regionFilter === '全部' || item.region === regionFilter);
  });

  if (loading) {
    return <Loading text="正在加载数据..." />;
  }

  return (
    <div className="archive-container">
      <SectionTitle title="非遗美食总名录" subtitle="搜罗中华大地传承百年的味道" />

      {/* Filters */}
      <FilterSection
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        categories={categories}
        regions={regions}
      />

      {/* Stats */}
      <div className="stats-bar">
        <span className="font-bold">统计：</span> 
        共收录 <span className="font-bold" style={{color: 'var(--primary-color)'}}>{heritageItems.length}</span> 项非遗美食，
        当前显示 <span className="font-bold" style={{color: 'var(--accent-color)'}}>{filteredItems.length}</span> 项。
      </div>

      {/* Grid */}
      <div className="archive-grid">
        {filteredItems.map(item => (
          <HeritageCard key={item.id} item={item} variant="archive" />
        ))}
      </div>
      
      {/* Policy Link */}
      <div className="policy-link">
        <p>了解更多申报标准，请访问 <a href="#" className="text-blue-600 hover:underline">文化和旅游部非遗司官网</a> (模拟链接)</p>
      </div>
    </div>
  );
};

export default Archive;

