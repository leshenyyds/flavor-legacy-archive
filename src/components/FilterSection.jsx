import React from 'react';
import '../assets/css/FilterSection.css';

export const FilterSection = ({ 
  categoryFilter, 
  setCategoryFilter, 
  regionFilter, 
  setRegionFilter,
  categories = [],
  regions = []
}) => {
  return (
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
  );
};

