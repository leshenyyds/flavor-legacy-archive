import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { FilterSection } from '../components/FilterSection';
import { HeritageCard } from '../components/HeritageCard';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import { Empty } from 'antd';
import '../assets/css/Archive.css';

const ArchiveList = () => {
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

      {/* Grid */}
      <div className="archive-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <HeritageCard key={item.id} item={item} variant="archive" />
          ))
        ) : (
          <div className="archive-empty">
            <Empty description="暂无符合筛选的项目" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </div>

    </div>
  );
};

export default ArchiveList;


