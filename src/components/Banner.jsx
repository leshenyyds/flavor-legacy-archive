import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Banner.css';

export const Banner = ({ banners = [], autoPlayInterval = 5000 }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    if (banners.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, autoPlayInterval);
    
    return () => clearInterval(timer);
  }, [banners.length, autoPlayInterval]);

  if (banners.length === 0) return null;

  return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-slide ${
            index === currentBanner ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={banner.img} 
            alt={banner.title} 
            className="banner-image"
            onError={() => {
              setImageError(prev => ({ ...prev, [index]: true }));
            }}
          />
          {imageError[index] && (
            <div className="banner-fallback">
              <h2>{banner.title}</h2>
            </div>
          )}
          <div className="banner-overlay">
            <h1 className="banner-title">
              {banner.overlayTitle || '一口非遗，一味传承'}
            </h1>
            <p className="banner-subtitle">
              {banner.overlaySubtitle || '解锁舌尖上的文化密码'}
            </p>
            {banner.linkTo && (
              <Link to={banner.linkTo} className="banner-btn">
                {banner.buttonText || '探索美味'}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

