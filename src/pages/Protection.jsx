import React from 'react';
import { Shield, TrendingUp, Lightbulb, Users, Heart, BookOpen } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import '../assets/css/Protection.css';

const Protection = () => (
  <div className="protection-container">
    <SectionTitle title="非遗保护与发展" subtitle="守护传统，传承未来" />
    
    {/* 保护现状 */}
    <div className="protection-section">
      <div className="section-header">
        <Shield className="section-icon" size={28} />
        <h2 className="section-title">保护现状</h2>
      </div>
      <div className="protection-box">
        <div className="stat-grid">
          <div className="stat-item">
            <div className="stat-number">3000+</div>
            <div className="stat-label">技艺数据</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">四级</div>
            <div className="stat-label">名录体系</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">专项资金</div>
            <div className="stat-label">持续投入</div>
          </div>
        </div>
        <p className="protection-text">
          文旅部设立"非遗保护专项资金"，建立国家、省、市、县四级名录体系。数字化档案库已收录超过3000项技艺数据，为非遗保护提供了坚实的数据基础。
        </p>
      </div>
    </div>

    {/* 发展挑战 */}
    <div className="protection-section">
      <div className="section-header">
        <TrendingUp className="section-icon" size={28} />
        <h2 className="section-title">发展挑战</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 challenges-grid">
        <div className="challenge-card">
          <div className="challenge-icon">
            <Users size={24} />
          </div>
          <h3 className="challenge-title">传承人老龄化</h3>
          <p className="challenge-desc">传统技艺传承人年龄普遍偏大，年轻一代学习意愿不足，技艺传承面临断代风险。</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-icon">
            <TrendingUp size={24} />
          </div>
          <h3 className="challenge-title">制作成本高</h3>
          <p className="challenge-desc">手工制作成本高，难以量产，市场竞争力弱，传统工艺面临现代化冲击。</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-icon">
            <BookOpen size={24} />
          </div>
          <h3 className="challenge-title">认知度不足</h3>
          <p className="challenge-desc">公众对非遗文化的认知度有限，缺乏深入了解和体验的机会。</p>
        </div>
      </div>
    </div>

    {/* 创新案例 */}
    <div className="protection-section">
      <div className="section-header">
        <Lightbulb className="section-icon" size={28} />
        <h2 className="section-title">创新案例</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 innovation-grid">
        <div className="innovation-card">
          <span className="innovation-badge">技术融合</span>
          <h3 className="innovation-title">非遗预制菜</h3>
          <p className="innovation-desc">
            某老字号推出"非遗预制菜"，通过液氮速冻技术还原90%口感，让传统美食走进现代生活，既保留了传统工艺，又满足了现代人的快节奏需求。
          </p>
        </div>
        <div className="innovation-card">
          <span className="innovation-badge">数字传播</span>
          <h3 className="innovation-title">直播带货</h3>
          <p className="innovation-desc">
            非遗博主通过直播带货，让深山里的腊肉走向全国。通过新媒体平台，传统技艺获得了新的传播渠道和商业价值。
          </p>
        </div>
      </div>
    </div>

    {/* 行动号召 */}
    <div className="call-to-action">
      <Heart className="action-icon" size={32} />
      <h3 className="action-title">守护舌尖非遗，我们能做什么？</h3>
      <div className="action-items">
        <div className="action-item">
          <div className="action-dot"></div>
          <span>购买一次非遗产品</span>
        </div>
        <div className="action-item">
          <div className="action-dot"></div>
          <span>学习一项简单技艺</span>
        </div>
        <div className="action-item">
          <div className="action-dot"></div>
          <span>传播一个非遗故事</span>
        </div>
      </div>
    </div>
  </div>
);

export default Protection;

