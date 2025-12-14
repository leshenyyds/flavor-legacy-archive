import React from 'react';
import { Users, Heart, BookOpen, Code, Palette, FileText, Award, Globe } from 'lucide-react';
import { SectionTitle } from '../components/Layout';
import '../assets/css/About.css';

const About = () => (
  <div className="about-container">
    <SectionTitle title="关于我们" subtitle="以数字之力，传承舌尖上的非遗文化" />
    
    {/* 项目介绍 */}
    <div className="about-section">
      <div className="about-logo">
        遗
      </div>
      <p className="about-mission">
        我们致力于通过数字化手段，让更多人了解、体验和传承中国传统美食制作技艺与民俗文化。
        每一道非遗美食背后，都承载着深厚的历史文化底蕴和匠人精神。
      </p>
    </div>

    {/* 团队介绍 */}
    <div className="team-section">
      <div className="section-header">
        <Users className="section-icon" size={28} />
        <h2 className="section-title">团队介绍</h2>
      </div>
      <div className="team-box">
        <p className="team-intro">
          <span className="intro-highlight">React 课程大作业项目·非遗美食文化传播平台</span> 
          <br />
          <span className="intro-text">
            我们希望通过这个项目，让更多人感受到非遗美食的独特魅力，
            了解每一道传统美食背后的历史故事与匠人精神，共同守护这份珍贵的文化遗产。
          </span>
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-icon">
              <FileText size={24} />
            </div>
            <h3 className="member-name">徐诗祯</h3>
            <p className="member-role">内容策划</p>
            <p className="member-desc">负责非遗文化内容的研究与整理</p>
          </div>
          <div className="team-member">
            <div className="member-icon">
              <Code size={24} />
            </div>
            <h3 className="member-name">章康乐</h3>
            <p className="member-role">前端开发</p>
            <p className="member-desc">负责网站开发与技术实现</p>
          </div>
        </div>
      </div>
    </div>

    {/* 项目特色 */}
    <div className="features-section">
      <div className="section-header">
        <Award className="section-icon" size={28} />
        <h2 className="section-title">项目特色</h2>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <BookOpen className="feature-icon" size={32} />
          <h3 className="feature-title">文化传承</h3>
          <p className="feature-desc">系统梳理非遗美食的历史脉络与文化内涵</p>
        </div>
        <div className="feature-card">
          <Heart className="feature-icon" size={32} />
          <h3 className="feature-title">匠人精神</h3>
          <p className="feature-desc">展现传承人的故事与技艺传承的坚守</p>
        </div>
        <div className="feature-card">
          <Globe className="feature-icon" size={32} />
          <h3 className="feature-title">数字传播</h3>
          <p className="feature-desc">运用现代技术让传统文化焕发新活力</p>
        </div>
      </div>
    </div>

 
  </div>
);

export default About;

