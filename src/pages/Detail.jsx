import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HERITAGE_ITEMS } from '../constants';
import { PlayCircle, Clock, MapPin, Award } from 'lucide-react';
import '../assets/css/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const item = HERITAGE_ITEMS.find(i => i.id === id);

  if (!item) {
    return <div className="text-center py-20">未找到该项目 <Link to="/archive" className="text-primary">返回名录</Link></div>;
  }

  return (
    <div className="detail-container animate-fade-in">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">首页</Link> / <Link to="/archive">非遗名录</Link> / {item.name}
      </div>

      {/* Header Info */}
      <div className="info-header">
        <div className="w-full md:w-1/3 w-1/3-d">
          <img src={item.image} alt={item.name} className="info-img" />
        </div>
        <div className="info-content">
          <h1 className="detail-title">{item.name}</h1>
          <div className="tag-cloud">
             <span className="tag tag-red"><Award size={14}/> {item.level}</span>
             <span className="tag tag-blue"><MapPin size={14}/> {item.region}</span>
             <span className="tag tag-green"><Clock size={14}/> {item.year}</span>
          </div>
          <p className="quote-box">
            "{item.description}"
          </p>
          <div className="inheritor-mini">
             <div className="inheritor-avatar">
               <img src={`https://picsum.photos/100/100?random=${id}`} alt="Inheritor" />
             </div>
             <div>
               <p className="text-xs text-stone-500">核心传承人</p>
               <p className="font-bold text-stone-800">{item.inheritorName}</p>
             </div>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Technique */}
          <section className="detail-section">
            <h2 className="section-head">技艺解密</h2>
            <div className="space-y-4">
              {item.details?.technique.map((step, idx) => (
                <div key={idx} className="step-item">
                  <div className="step-num">
                    {idx + 1}
                  </div>
                  <div className="step-content">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* History */}
          <section className="detail-section">
            <h2 className="section-head">历史溯源</h2>
            <div className="prose text-stone-700">
              <p>{item.details?.history}</p>
            </div>
            <div className="mt-4 h-40 bg-stone-200 rounded flex items-center justify-center text-stone-500">
              [模拟老照片/史料展示区域]
            </div>
          </section>

          {/* Culture */}
          <section className="detail-section">
            <h2 className="section-head">文化内涵</h2>
            <p className="text-stone-700 leading-relaxed">{item.details?.culture}</p>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Video */}
          <div className="video-placeholder group">
             <img src={item.image} className="video-thumb" />
             <PlayCircle size={48} className="play-icon" />
             <div className="absolute bottom-2 left-2 text-white text-xs z-10">全程制作实录</div>
          </div>

          {/* Recommendations */}
          <div className="detail-section">
            <h3 className="font-bold text-stone-800 mb-4">相关推荐</h3>
            <ul className="rec-list">
              {HERITAGE_ITEMS.filter(i => i.id !== item.id).slice(0, 3).map(rec => (
                <li key={rec.id}>
                  <Link to={`/detail/${rec.id}`} className="rec-link">
                    <img src={rec.image} className="rec-thumb" />
                    <div className="rec-info">
                      <p>{rec.name}</p>
                      <p className="text-xs text-stone-500">{rec.region}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

