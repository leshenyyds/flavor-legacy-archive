import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionTitle } from '../components/Layout';
import Quiz from '../components/Quiz';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import '../assets/css/Interactive.css';

const Interactive = () => {
  const [loading, setLoading] = useState(true);
  const [quizData, setQuizData] = useState([]);
  const [diyData, setDiyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [quizRes, diyRes] = await Promise.all([
          apiService.getQuizData(),
          apiService.getDiyData()
        ]);
        setQuizData(quizRes.data);
        setDiyData(diyRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="interactive-container">
      <SectionTitle 
        title="互动专区" 
        subtitle="体验非遗，参与互动，感受传统文化的魅力"
      />
      
      <div className="space-y-12">
        {/* DIY */}
        <section className="diy-section">
          <h3 className="diy-section-title">DIY 简易教程</h3>
          <div className="diy-grid">
            {diyData.map(item => (
              <div 
                key={item.id} 
                className={`diy-card diy-card-${item.type}`}
                onClick={() => item.url && navigate(item.url)}
              >
                <h4 className="diy-card-title">{item.title}</h4>
                <p className="diy-card-difficulty">难度：{item.difficulty}</p>
                <p className="diy-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vote */}
        <section className="vote-section">
          <h3 className="text-xl font-bold mb-6 text-center">你最想体验哪项技艺？</h3>
          <div className="space-y-4">
            {[
              { name: '螺蛳粉制作', votes: 328, percent: '60%' },
              { name: '烤鸭片制', votes: 256, percent: '45%' },
              { name: '糖画绘制', votes: 150, percent: '30%' }
            ].map(opt => (
              <div key={opt.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{opt.name}</span>
                  <span>{opt.votes} 票</span>
                </div>
                <div className="vote-bar-bg">
                  <div className="vote-bar-fill" style={{ width: opt.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quiz */}
        {loading ? (
          <Loading text="正在加载题目..." />
        ) : (
          <Quiz quizData={quizData} />
        )}
      </div>
    </div>
  );
};

export default Interactive;

