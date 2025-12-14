import React from 'react';
import { SectionTitle } from '../components/Layout';
import '../assets/css/MiscPages.css';

const Interactive = () => (
  <div className="interactive-container">
    <SectionTitle title="互动专区" />
    
    <div className="space-y-12">
      {/* DIY */}
      <section>
        <h3 className="text-xl font-bold mb-4 text-stone-800">DIY 简易教程</h3>
        <div className="diy-grid">
          <div className="diy-card diy-card-green">
            <h4 className="font-bold mb-2">家庭版糖画</h4>
            <p className="text-xs text-stone-500 mb-2">难度：⭐⭐</p>
            <p className="text-sm">熬糖是关键，勺子当笔...</p>
          </div>
          <div className="diy-card diy-card-yellow">
            <h4 className="font-bold mb-2">手工包粽子</h4>
            <p className="text-xs text-stone-500 mb-2">难度：⭐⭐⭐</p>
            <p className="text-sm">漏斗型折叶法图解...</p>
          </div>
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
      <section className="quiz-section">
         <h3 className="text-xl font-bold mb-4">非遗知识小测试</h3>
         <p className="mb-6">以下哪种是国家级非遗美食？</p>
         <div className="flex justify-center gap-4">
           <button className="quiz-btn">A. 螺蛳粉</button>
           <button className="quiz-btn">B. 热干面</button>
         </div>
      </section>
    </div>
  </div>
);

export default Interactive;

