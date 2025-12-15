import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Empty } from 'antd';
import { SectionTitle } from '../components/SectionTitle';
import Loading from '../components/Loading';
import { addComment } from '../store/slices/commentsSlice';
import { apiService } from '../services/api';
import '../assets/css/Stories.css';

const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

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

  const handleSubmit = () => {
    if (inputValue.trim()) {
      dispatch(addComment({ content: inputValue.trim() }));
      setInputValue('');
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // 根据选中的分类过滤故事
  const filteredStories = selectedCategory === '全部' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  if (loading) {
    return <Loading text="正在加载数据..." />;
  }

  const categories = ['全部', '节日食俗', '地域食俗', '仪式食俗'];

  return (
    <div className="stories-container">
      <SectionTitle title="民俗故事" subtitle="品味美食背后的文化温度" />
      <div className="tags-scroll">
        {categories.map(tag => (
          <button 
            key={tag} 
            onClick={() => handleCategoryChange(tag)}
            className={`tag-btn ${selectedCategory === tag ? 'active' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="stories-grid">
        {filteredStories.length > 0 ? (
          filteredStories.map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} className="story-img" alt={story.title}/>
            <div className="story-content">
              <div>
                <span className="story-cat">{story.category}</span>
                <h3 className="story-title">{story.title}</h3>
                <p className="text-stone-600 text-sm line-clamp-3">{story.content}</p>
              </div>
            </div>
          </div>
          ))
        ) : (
          <div className="story-empty">
            <Empty description="暂无该分类的故事" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </div>
      <div className="interaction-box">
        <h3 className="text-lg font-bold mb-4">话题互动：你的家乡有哪些和美食相关的民俗？</h3>
        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && inputValue.trim()) {
                  handleSubmit();
                }
              }}
              placeholder="写下你的故事..."
              className="flex-1 bg-white p-3 rounded border border-orange-200 text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
            <button
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
              className="px-6 py-3 bg-primary text-white rounded font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              发送
            </button>
          </div>
        </div>
        <List
          dataSource={comments}
          itemLayout="horizontal"
          renderItem={(comment) => (
            <List.Item style={{ padding: '8px 0', borderBottom: '1px solid #ffedd5' }}>
              <List.Item.Meta
                title={
                  <span className="font-bold" style={{ color: 'var(--primary-color)' }}>
                    {comment.username}
                  </span>
                }
                description={
                  <span className="text-sm text-stone-600">
                    {comment.content}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Stories;

