import React from 'react';
import '../assets/css/About.css';

const About = () => (
  <div className="about-container">
    <div className="mb-12">
      <div className="about-logo">
        遗
      </div>
      <h1 className="text-3xl font-bold text-stone-800 mb-4">关于我们</h1>
      <p className="text-xl text-stone-600 italic">"以数字之力，传承舌尖上的非遗文化"</p>
    </div>

    <div className="team-box">
      <h3 className="text-lg font-bold mb-4 border-b pb-2">团队介绍</h3>
      <p className="mb-4">我们要"非遗美食文化传播小组"，一群热爱传统文化的高校学生。</p>
      <ul className="grid grid-cols-2 gap-4">
        <li><strong>王同学</strong> - 内容策划</li>
        <li><strong>李同学</strong> - 视觉设计</li>
        <li><strong>张同学</strong> - 前端开发</li>
      </ul>
    </div>

    <div className="text-sm text-stone-500">
      <p>数据来源：中华人民共和国文化和旅游部、中国非物质文化遗产网</p>
    </div>
  </div>
);

export default About;

