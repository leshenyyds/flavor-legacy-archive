import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/Layout';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import '../assets/css/Techniques.css';

const Techniques = () => {
  const [loading, setLoading] = useState(true);
  const [techniques, setTechniques] = useState([]);
  const [comparison, setComparison] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [techniquesRes, comparisonRes, quotesRes] = await Promise.all([
          apiService.getTechniques(),
          apiService.getTechniqueComparison(),
          apiService.getCraftsmanQuotes()
        ]);

        setTechniques(techniquesRes.data);
        setComparison(comparisonRes.data);
        setQuotes(quotesRes.data);
      } catch (error) {
        console.error('Failed to fetch techniques data:', error);
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
    <div className="tech-container">
      <SectionTitle 
        title="千锤百炼：非遗美食的核心制作技艺" 
        subtitle="传承千年的精湛工艺，每一道工序都凝聚着匠人的智慧"
      />
      
      {/* 4 Main Categories */}
      <div className="tech-grid">
        {techniques.map((t, idx) => (
          <div key={idx} className="tech-card">
            <h3 className="tech-title">{t.title}</h3>
            <p className="tech-desc">{t.desc}</p>
            <div className="tech-example">
              <span className="font-bold">举例：</span>{t.examples}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="comparison-box">
        <h3 className="comp-title">技艺对比：米的做法</h3>
        <div className="table-responsive">
          <table className="tech-table">
            <thead>
              <tr>
                <th>美食项目</th>
                <th>选材差异</th>
                <th>核心技艺</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, idx) => (
                <tr key={idx}>
                  <td className="font-medium">{item.name}</td>
                  <td>{item.material}</td>
                  <td>{item.technique}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quotes */}
      <div className="quotes-section">
        <h3 className="text-center font-serif text-2xl mb-8" style={{color: 'var(--primary-color)'}}>匠人语录</h3>
        <div className="quotes-grid">
           {quotes.map((quote, i) => (
             <div key={i} className="quote-card">
               <span className="quote-mark">"</span>
               <p className="quote-text">{quote}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Techniques;

