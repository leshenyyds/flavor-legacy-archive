import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/MiscPages.css';

const NotFound = () => (
  <div className="not-found-container">
    <div className="error-code">404</div>
    <h2 className="error-msg">哎呀！你找的页面"跑丢啦"～</h2>
    <p className="text-stone-500 mb-8">这碗面打翻了，不如换一碗尝尝？</p>
    
    <Link to="/" className="btn-primary">
      返回首页
    </Link>
    
    <div className="mt-12 text-left">
      <p className="text-sm font-bold text-stone-400 mb-2 uppercase">热门推荐</p>
      <div className="flex gap-4 text-sm underline" style={{color: 'var(--primary-color)'}}>
        <Link to="/detail/luosifen">螺蛳粉</Link>
        <Link to="/detail/kaoya">北京烤鸭</Link>
        <Link to="/map">美食地图</Link>
      </div>
    </div>
  </div>
);

export default NotFound;

