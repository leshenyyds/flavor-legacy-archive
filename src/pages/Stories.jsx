import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/Layout';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import '../assets/css/MiscPages.css';

const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getStories();
        setStories(response.data);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading text="正在加载数据..." />;
  }

  return (
    <div className="stories-container">
      <SectionTitle title="民俗故事" subtitle="品味美食背后的文化温度" />
      <div className="tags-scroll">
        {['全部', '节日食俗', '地域食俗', '仪式食俗'].map(tag => (
          <button key={tag} className="tag-btn">
            {tag}
          </button>
        ))}
      </div>
      <div className="stories-grid">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} className="story-img" alt={story.title}/>
            <div className="story-content">
              <div>
                <span className="story-cat">{story.category}</span>
                <h3 className="story-title">{story.title}</h3>
                <p className="text-stone-600 text-sm line-clamp-3">{story.content}</p>
              </div>
              <button className="read-btn">阅读全文</button>
            </div>
          </div>
        ))}
      </div>
      <div className="interaction-box">
        <h3 className="text-lg font-bold mb-4">话题互动：你的家乡有哪些和美食相关的民俗？</h3>
        <div className="bg-white p-3 rounded border border-orange-200 text-stone-400 mb-4 cursor-text">写下你的故事...</div>
        <div className="space-y-3">
          <div className="text-sm text-stone-600 border-b border-orange-100 pb-2">
            <span className="font-bold text-primary" style={{color: 'var(--primary-color)'}}>User123:</span> 我们这过年要吃"年糕"，寓意年年高。
          </div>
          <div className="text-sm text-stone-600 border-b border-orange-100 pb-2">
            <span className="font-bold text-primary" style={{color: 'var(--primary-color)'}}>Foodie:</span> 立夏要吃蛋，挂蛋袋！
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;

