import React from 'react';
import { SectionTitle } from '../components/Layout';
import { STORIES } from '../constants';
import { Link } from 'react-router-dom';
import '../assets/css/MiscPages.css';

// --- Page 6: Stories ---
export const Stories = () => (
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
      {STORIES.map(story => (
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

// --- Page 9: Map ---
export const MapPage = () => (
  <div className="map-container">
    <SectionTitle title="非遗美食地图" subtitle="探索中华大地的味觉版图" />
    <div className="map-viz">
      <span className="text-stone-400 text-xl font-bold">[中国地图交互区 - 模拟展示]</span>
      <div className="map-label" style={{top:'20%', left:'25%'}}>
        <strong className="text-red-800 block">西北面食带</strong>
        兰州牛肉面, 泡馍
      </div>
      <div className="map-label" style={{top:'50%', left:'50%'}}>
        <strong className="text-red-800 block">西南调味带</strong>
        郫县豆瓣, 火锅
      </div>
      <div className="map-label" style={{bottom:'25%', right:'25%'}}>
        <strong className="text-red-800 block">长江米面带</strong>
        扬州炒饭, 汤包
      </div>
    </div>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">美食带解析</h3>
        <p className="text-stone-600">长江中下游米面非遗带：稻作文化的极致体现，讲究精细、鲜美。</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">打卡路线推荐</h3>
        <div className="flex items-center gap-2 text-sm text-stone-700">
          <span className="bg-primary text-white px-2 rounded" style={{backgroundColor: 'var(--primary-color)'}}>Day 1</span> 南京鸭血粉丝 
          <span>→</span>
          <span className="bg-primary text-white px-2 rounded" style={{backgroundColor: 'var(--primary-color)'}}>Day 2</span> 苏州汤包
          <span>→</span>
          <span className="bg-primary text-white px-2 rounded" style={{backgroundColor: 'var(--primary-color)'}}>Day 3</span> 杭州片儿川
        </div>
      </div>
    </div>
  </div>
);

// --- Page 10: Interactive ---
export const Interactive = () => (
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

// --- Page 11: Protection ---
export const Protection = () => (
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

// --- Page 12: About ---
export const About = () => (
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

// --- Page 13: 404 ---
export const NotFound = () => (
  <div className="not-found-container">
    <div className="error-code">404</div>
    <h2 className="error-msg">哎呀！你找的页面"跑丢啦"～</h2>
    <p className="text-stone-500 mb-8">这碗面打翻了，不如换一碗尝尝？</p>
    
    <Link to="/" className="btn-primary">
      返回首页
    </Link>
    
    <div className="mt-12 text-left">
      <p className="text-sm font-bold text-stone-400 mb-2 uppercase">热门推荐</p>
      <div className="flex gap-4 text-sm underline" style={{color: 'var(--primary-color)'}}>
        <Link to="/detail/luosifen">螺蛳粉</Link>
        <Link to="/detail/kaoya">北京烤鸭</Link>
        <Link to="/map">美食地图</Link>
      </div>
    </div>
  </div>
);

