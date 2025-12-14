import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../components/Layout';
import { Banner } from '../components/Banner';
import { HeritageCard } from '../components/HeritageCard';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import '../assets/css/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [banners, setBanners] = useState([]);
  const [news, setNews] = useState([]);
  const [trivia, setTrivia] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 并行请求所有数据
        const [heritageRes, bannersRes, newsRes, triviasRes] = await Promise.all([
          apiService.getHeritageItems(),
          apiService.getBanners(),
          apiService.getNews(),
          apiService.getTrivias()
        ]);

        setFeaturedItems(heritageRes.data.slice(0, 3));
        setBanners(bannersRes.data);
        setNews(newsRes.data);
        setTrivia(triviasRes.data.length > 0 ? triviasRes.data[0] : null);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading text="正在加载数据..." />;
  }

  if (!featuredItems || featuredItems.length === 0) {
    return (
      <div className="home-content">
        <p>暂无数据</p>
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
              {news.map((item) => (
                <div key={item.id} className="news-item">
                  <p className="text-stone-700 truncate flex-1">{item.title}</p>
                  <span className="text-stone-400 text-sm ml-4">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trivia */}
          {trivia && (
            <div className="trivia-box">
               <h3 className="news-header">民俗小知识</h3>
               <div className="flex flex-col gap-4">
                 <img src={trivia.image} alt={trivia.title} className="rounded-md object-cover h-32 w-full" />
                 <h4 className="font-bold text-stone-800">{trivia.title}</h4>
                 <p className="text-sm text-stone-600">
                   {trivia.description}
                 </p>
                 <Link to={trivia.linkTo} className="text-sm text-accent font-medium flex items-center mt-2" style={{color: 'var(--accent-color)'}}>
                   {trivia.linkText} <ArrowRight size={14} />
                 </Link>
               </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;

