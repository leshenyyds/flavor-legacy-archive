import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { SectionTitle } from '../components/SectionTitle';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import { DEFAULT_IMAGE } from '../assets/data/commonData';
import '../assets/css/Techniques.css';

const Techniques = () => {
  const [loading, setLoading] = useState(true);
  const [techniques, setTechniques] = useState([]);
  const [heritageItems, setHeritageItems] = useState([]);
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [techniquesRes, heritageRes] = await Promise.all([
          apiService.getTechniques(),
          apiService.getHeritageItems()
        ]);

        setTechniques(techniquesRes.data);
        setHeritageItems(heritageRes.data);
      } catch (error) {
        console.error('Failed to fetch techniques data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTechniqueClick = async (technique) => {
    if (selectedTechnique?.title === technique.title) {
      // 如果点击的是已选中的技艺，则取消选择
      setSelectedTechnique(null);
      setDetailLoading(false);
    } else {
      // 显示加载状态
      setDetailLoading(true);
      setSelectedTechnique(null);
      
      try {
        // 通过 API 获取技艺详情（包含延迟）
        const response = await apiService.getTechniqueByTitle(technique.title);
        if (response.data) {
          setSelectedTechnique(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch technique detail:', error);
      } finally {
        setDetailLoading(false);
      }
    }
  };

  // 获取选中技艺对应的代表作列表
  const getHeritageItemsForTechnique = () => {
    if (!selectedTechnique || !selectedTechnique.heritageIds) return [];
    return heritageItems.filter(item => selectedTechnique.heritageIds.includes(item.id));
  };

  if (loading) {
    return <Loading text="正在加载数据..." />;
  }

  return (
    <div className="tech-container">
      <SectionTitle 
        title="千锤百炼：非遗美食的核心制作技艺" 
        subtitle="传承千年的精湛工艺，每一道工序都凝聚着匠人的智慧"
      />
      
      {/* 4 Main Categories */}
      <div className="tech-grid">
        {techniques.map((t, idx) => (
          <Card
            key={idx}
            className={`tech-card ${selectedTechnique?.title === t.title ? 'tech-card-active' : ''}`}
            hoverable={false}
            bordered={false}
            bodyStyle={{ padding: 0, height: '100%' }}
            onClick={() => handleTechniqueClick(t)}
          >
            {t.image && (
              <div className="tech-card-image">
                <img src={t.image} alt={t.title} onError={(e) => { e.target.src = DEFAULT_IMAGE; }} />
              </div>
            )}
            <h3 className="tech-title">{t.title}</h3>
            <p className="tech-desc">{t.desc}</p>
            <div className="tech-example">
              <span className="font-bold">举例：</span>{t.examples}
            </div>
          </Card>
        ))}
      </div>

      {/* Technique Detail */}
      {detailLoading ? (
        <Loading text="正在加载技艺详情..." />
      ) : selectedTechnique && (
        <div className="tech-detail-box">
          <h3 className="tech-detail-title">{selectedTechnique.title}</h3>
          <div className="tech-detail-content">
            <div className="tech-detail-image">
              <img 
                src={selectedTechnique.image} 
                alt={selectedTechnique.title}
                onError={(e) => { e.target.src = DEFAULT_IMAGE; }}
              />
            </div>
            <div className="tech-detail-info">
              <h4 className="tech-detail-name">{selectedTechnique.title}</h4>
              <p className="tech-detail-desc">{selectedTechnique.description}</p>
              
              {selectedTechnique.history && (
                <div className="tech-detail-history">
                  <h5 className="tech-detail-subtitle">历史渊源：</h5>
                  <p className="tech-detail-history-text">{selectedTechnique.history}</p>
                </div>
              )}

              {selectedTechnique.characteristics && (
                <div className="tech-detail-techniques">
                  <h5 className="tech-detail-subtitle">技艺特点：</h5>
                  <ul className="tech-detail-list">
                    {selectedTechnique.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
              )}

              {getHeritageItemsForTechnique().length > 0 && (
                <div className="tech-detail-heritages">
                  <h5 className="tech-detail-subtitle">代表作品：</h5>
                  <div className="heritage-icons-grid">
                    {getHeritageItemsForTechnique().map((heritage) => (
                      <Link 
                        key={heritage.id} 
                        to={`/archive/${heritage.id}`}
                        className="heritage-icon-item"
                      >
                        <div className="heritage-icon-image">
                          <img 
                            src={heritage.image} 
                            alt={heritage.name}
                            onError={(e) => { e.target.src = DEFAULT_IMAGE; }}
                          />
                        </div>
                        <span className="heritage-icon-name">{heritage.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Quotes */}
      {selectedTechnique && selectedTechnique.quotes && (
        <div className="quotes-section">
          <h3 className="text-center font-serif text-2xl mb-8" style={{color: 'var(--primary-color)'}}>
            {selectedTechnique.title} · 匠人语录
          </h3>
          <div className="quotes-grid">
            {selectedTechnique.quotes.map((quote, i) => (
              <div key={i} className="quote-card">
                <span className="quote-mark">"</span>
                <p className="quote-text">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Techniques;

