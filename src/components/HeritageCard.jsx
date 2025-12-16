import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { DEFAULT_IMAGE } from '../assets/data/commonData';
import '../assets/css/HeritageCard.css';

export const HeritageCard = ({ item, variant = 'default' }) => {
  const [imageError, setImageError] = useState(false);

  if (variant === 'archive') {
    return (
      <Card
        className="archive-card"
        cover={
          <div className="archive-img-container">
            <img
              src={item.image}
              alt={item.name}
              className="archive-img"
              onError={(e) => {
                setImageError(true);
                e.target.src = DEFAULT_IMAGE;
              }}
            />
            {!imageError && <div className="archive-level-badge">{item.level}</div>}
          </div>
        }
        hoverable={false}
        bordered={false}
        bodyStyle={{ padding: 0 }}
      >
        <div className="archive-card-body">
          <h3 className="archive-card-title">{item.name}</h3>
          <div className="archive-meta">
            <span>{item.region}</span>
            <span>{item.year}入选</span>
          </div>
          <Link to={`/archive/${item.id}`} className="view-btn">
            查看详情
          </Link>
        </div>
      </Card>
    );
  }

  // Default variant (for Home page)
  return (
    <Card
      className="heritage-card group"
      hoverable={false}
      bordered={false}
      bodyStyle={{ padding: 0 }}
      cover={
        <div className="card-img-wrap">
          <img
            src={item.image}
            alt={item.name}
            className="card-img"
            onError={(e) => {
              setImageError(true);
              e.target.src = DEFAULT_IMAGE;
            }}
          />
        </div>
      }
    >
      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{item.name}</h3>
          <span className="card-tag">{item.level}</span>
        </div>
        <p className="card-desc">{item.description}</p>
        <Link to={`/archive/${item.id}`} className="card-link">
          查看详情
        </Link>
      </div>
    </Card>
  );
};

