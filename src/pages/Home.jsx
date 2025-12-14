import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../components/Layout';
import { HERITAGE_ITEMS, NEWS } from '../constants';
import '../assets/css/Home.css';

const Home = () => {
  const featuredItems = HERITAGE_ITEMS.slice(0, 3);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [imageError, setImageError] = useState({});
  const banners = [
    { title: '北京烤鸭技艺', img: 'https://picsum.photos/1200/500?random=1' },
    { title: '四川火锅调制', img: 'https://picsum.photos/1200/500?random=2' },
    { title: '广东早茶制作', img: 'https://picsum.photos/1200/500?random=3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);


  // 确保数据存在
  if (!featuredItems || featuredItems.length === 0) {
    return (
      <div className="home-content">
        <p>正在加载数据...</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ opacity: 1 }}>
      {/* Banner */}
      <div className="banner-container" style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
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
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                setImageError(prev => ({ ...prev, [`banner-${index}`]: true }));
                e.target.style.display = 'none';
              }}
            />
            {imageError[`banner-${index}`] && (
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #fb923c, #ea580c)' }}>
                <div className="text-white text-center" style={{ color: 'white', textAlign: 'center' }}>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{banner.title}</h2>
                </div>
              </div>
            )}
            <div className="banner-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', padding: '1rem', textAlign: 'center' }}>
              <h1 className="banner-title">
                一口非遗，一味传承
              </h1>
              <p className="banner-subtitle">
                解锁舌尖上的文化密码
              </p>
              <Link to="/archive" className="banner-btn">
                探索美味
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="home-content" style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Recommendations */}
        <section style={{ width: '100%' }}>
          <SectionTitle title="非遗美食推荐" subtitle="品味历史沉淀的味道" />
          <div className="rec-grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="heritage-card group">
                <div className="card-img-wrap">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="card-img"
                      onError={(e) => {
                        setImageError(prev => ({ ...prev, [`item-${item.id}`]: true }));
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ffedd5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239a3412" font-size="20"%3E图片加载中...%3C/text%3E%3C/svg%3E';
                      }}
                    />
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <h3 className="card-title">{item.name}</h3>
                    <span className="card-tag">{item.level}</span>
                  </div>
                  <p className="card-desc">{item.description}</p>
                  <Link to={`/detail/${item.id}`} className="card-link">
                    查看详情 <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic & Knowledge */}
        <div className="info-grid">
          {/* News */}
          <div className="news-box">
            <h3 className="news-header">
              <span className="w-2 h-6 bg-primary rounded-full block mr-2" style={{ backgroundColor: 'var(--primary-color)' }}></span>
              非遗动态
            </h3>
            <div className="space-y-4">
              {NEWS.map((news) => (
                <div key={news.id} className="news-item">
                  <p className="text-stone-700 truncate flex-1">{news.title}</p>
                  <span className="text-stone-400 text-sm ml-4">{news.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trivia */}
          <div className="trivia-box">
             <h3 className="news-header">民俗小知识</h3>
             <div className="flex flex-col gap-4">
               <img src="https://picsum.photos/300/150?random=9" alt="Zongzi" className="rounded-md object-cover h-32 w-full" />
               <h4 className="font-bold text-stone-800">为何端午要吃粽子？</h4>
               <p className="text-sm text-stone-600">
                 除了纪念屈原，在非遗食俗中，粽叶的清香象征驱邪，糯米象征丰收。
               </p>
               <Link to="/stories" className="text-sm text-accent font-medium flex items-center mt-2" style={{color: 'var(--accent-color)'}}>
                 阅读更多 <ArrowRight size={14} />
               </Link>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

