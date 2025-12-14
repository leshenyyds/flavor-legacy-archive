import React from 'react';
import '../assets/css/Protection.css';

const Protection = () => (
  <div className="protection-container">
    <h1 className="protection-title">非遗保护与发展</h1>
    <div className="protection-box">
      <h3 className="text-xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>保护现状</h3>
      <p>文旅部设立"非遗保护专项资金"，建立国家、省、市、县四级名录体系。数字化档案库已收录超过3000项技艺数据。</p>
    </div>
    
    <h3 className="font-bold text-lg mt-8 mb-4">发展挑战</h3>
    <ul className="list-disc list-inside mb-8">
      <li>手工制作成本高，难以量产</li>
      <li>传承人老龄化严重</li>
    </ul>

    <h3 className="font-bold text-lg mb-4">创新案例</h3>
    <p>某老字号推出"非遗预制菜"，通过液氮速冻技术还原90%口感；非遗博主通过直播带货，让深山里的腊肉走向全国。</p>

    <div className="call-to-action">
      <h3 className="text-2xl font-serif font-bold mb-4">守护舌尖非遗，我们能做什么？</h3>
      <p>购买一次非遗产品 · 学习一项简单技艺 · 传播一个非遗故事</p>
    </div>
  </div>
);

export default Protection;

