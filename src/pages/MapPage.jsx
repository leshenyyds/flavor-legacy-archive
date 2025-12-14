import React from 'react';
import { SectionTitle } from '../components/Layout';
import '../assets/css/MiscPages.css';

const MapPage = () => (
  <div className="map-container">
    <SectionTitle title="非遗美食地图" subtitle="探索中华大地的味觉版图" />
    <div className="map-viz">
      <span className="text-stone-400 text-xl font-bold">[中国地图交互区 - 模拟展示]</span>
      <div className="map-label" style={{top:'20%', left:'25%'}}>
        <strong className="text-red-800 block">西北面食带</strong>
        兰州牛肉面, 泡馍
      </div>
      <div className="map-label" style={{top:'50%', left:'50%'}}>
        <strong className="text-red-800 block">西南调味带</strong>
        郫县豆瓣, 火锅
      </div>
      <div className="map-label" style={{bottom:'25%', right:'25%'}}>
        <strong className="text-red-800 block">长江米面带</strong>
        扬州炒饭, 汤包
      </div>
    </div>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">美食带解析</h3>
        <p className="text-stone-600">长江中下游米面非遗带：稻作文化的极致体现，讲究精细、鲜美。</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">打卡路线推荐</h3>
        <div className="flex items-center gap-2 text-sm text-stone-700">
          <span className="bg-primary text-white px-2 rounded" style={{backgroundColor: 'var(--primary-color)'}}>Day 1</span> 南京鸭血粉丝 
          <span>→</span>
          <span className="bg-primary text-white px-2 rounded" style={{backgroundColor: 'var(--primary-color)'}}>Day 2</span> 苏州汤包
          <span>→</span>
          <span className="bg-primary text-white px-2 rounded" style={{backgroundColor: 'var(--primary-color)'}}>Day 3</span> 杭州片儿川
        </div>
      </div>
    </div>
  </div>
);

export default MapPage;

