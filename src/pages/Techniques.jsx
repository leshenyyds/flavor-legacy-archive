import React from 'react';
import { SectionTitle } from '../components/Layout';
import '../assets/css/Techniques.css';

const Techniques = () => {
  const techniques = [
    { title: '火工技艺', desc: '烤、炖、蒸、炸', examples: '烤鸭挂炉火控、佛跳墙慢炖' },
    { title: '调味技艺', desc: '酱料、汤料、腌制', examples: '郫县豆瓣酿制、潮汕牛肉火锅汤底' },
    { title: '塑形技艺', desc: '面点捏塑、米粉压制', examples: '山西刀削面、广东虾饺捏制' },
    { title: '发酵技艺', desc: '酒、醋、酱、泡菜', examples: '绍兴黄酒酿造、四川泡菜发酵' },
  ];

  return (
    <div className="tech-container">
      <SectionTitle title="千锤百炼：非遗美食的核心制作技艺" />
      
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
              <tr>
                <td className="font-medium">过桥米线</td>
                <td>干浆/酸浆</td>
                <td>两次蒸煮，挤压成型</td>
              </tr>
              <tr>
                <td className="font-medium">桂林米粉</td>
                <td>早籼米</td>
                <td>发酵磨浆，揣粉团</td>
              </tr>
              <tr>
                <td className="font-medium">云南饵丝</td>
                <td>优质大米</td>
                <td>蒸熟后舂制成块，切丝</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quotes */}
      <div className="quotes-section">
        <h3 className="text-center font-serif text-2xl mb-8" style={{color: 'var(--primary-color)'}}>匠人语录</h3>
        <div className="quotes-grid">
           {['做面要揉够18遍，差一遍都不行', '火候不到，味道就差之千里', '心静，手才稳，味才正'].map((quote, i) => (
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

