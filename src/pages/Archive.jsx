import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Layout';
import { HERITAGE_ITEMS } from '../constants';
import '../assets/css/Archive.css';

const Archive = () => {
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [regionFilter, setRegionFilter] = useState('全部');

  const categories = ['全部', '烹饪技艺', '面点制作', '酱料制作', '茶酒酿造', '特色小吃'];
  const regions = ['全部', '华北', '华东', '华南', '西南', '西北', '东北'];

  const filteredItems = HERITAGE_ITEMS.filter(item => {
    return (categoryFilter === '全部' || item.category === categoryFilter) &&
           (regionFilter === '全部' || item.region === regionFilter);
  });

  return (
    <div className="archive-container">
      <SectionTitle title="非遗美食总名录" subtitle="搜罗中华大地传承百年的味道" />

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-label">按类别筛选:</span>
          <div className="filter-options">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`filter-btn ${categoryFilter === c ? 'active' : 'inactive'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">按地域筛选:</span>
          <div className="filter-options">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                className={`filter-btn ${regionFilter === r ? 'region-active' : 'inactive'}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <span className="font-bold">统计：</span> 
        共收录 <span className="font-bold" style={{color: 'var(--primary-color)'}}>{HERITAGE_ITEMS.length}</span> 项非遗美食，
        当前显示 <span className="font-bold" style={{color: 'var(--accent-color)'}}>{filteredItems.length}</span> 项。
      </div>

      {/* Grid */}
      <div className="archive-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="archive-card">
            <div className="archive-img-container">
              <img src={item.image} alt={item.name} className="archive-img" />
              <div className="archive-level-badge">
                {item.level}
              </div>
            </div>
            <div className="archive-card-body">
              <h3 className="archive-card-title">{item.name}</h3>
              <div className="archive-meta">
                <span>{item.region}</span>
                <span>{item.year}入选</span>
              </div>
              <Link to={`/detail/${item.id}`} className="view-btn">
                查看详情
              </Link>
            </div>
          </div>
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

