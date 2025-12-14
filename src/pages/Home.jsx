import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../components/Layout';
import { Banner } from '../components/Banner';
import { HeritageCard } from '../components/HeritageCard';
import { HERITAGE_ITEMS, NEWS } from '../constants';
import '../assets/css/Home.css';

const Home = () => {
  const featuredItems = HERITAGE_ITEMS.slice(0, 3);
  const [imageError, setImageError] = useState({});
  const banners = [
    { 
      title: '北京烤鸭技艺', 
      img: 'https://picsum.photos/1200/500?random=1',
      overlayTitle: '一口非遗，一味传承',
      overlaySubtitle: '解锁舌尖上的文化密码',
      linkTo: '/archive',
      buttonText: '探索美味'
    },
    { 
      title: '四川火锅调制', 
      img: 'https://picsum.photos/1200/500?random=2',
      overlayTitle: '一口非遗，一味传承',
      overlaySubtitle: '解锁舌尖上的文化密码',
      linkTo: '/archive',
      buttonText: '探索美味'
    },
    { 
      title: '广东早茶制作', 
      img: 'https://picsum.photos/1200/500?random=3',
      overlayTitle: '一口非遗，一味传承',
      overlaySubtitle: '解锁舌尖上的文化密码',
      linkTo: '/archive',
      buttonText: '探索美味'
    },
  ];


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
      <Banner banners={banners} autoPlayInterval={5000} />

      <div className="home-content" style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Recommendations */}
        <section style={{ width: '100%' }}>
          <SectionTitle title="非遗美食推荐" subtitle="品味历史沉淀的味道" />
          <div className="rec-grid">
            {featuredItems.map((item) => (
              <HeritageCard key={item.id} item={item} variant="default" />
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

