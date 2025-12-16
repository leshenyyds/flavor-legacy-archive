import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { SectionTitle } from '../components/SectionTitle';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import { User } from 'lucide-react';
import '../assets/css/Inheritors.css';

const InheritorList = () => {
  const [loading, setLoading] = useState(true);
  const [inheritors, setInheritors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getInheritors();
        setInheritors(response.data);
      } catch (error) {
        console.error('Failed to fetch inheritors:', error);
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
    <div className="inheritor-container">
      <SectionTitle title="传承人风采"  />
      
      <div className="inheritor-grid">
        {[1, 2, 3, 4, 5, 6].map(id => {
          const person = inheritors.find(p => p.id === String(id));
          return person ? (
            <Card
              key={person.id}
              className="inheritor-card group"
              hoverable={false}
              bordered={false}
              bodyStyle={{ padding: 0, height: '100%' }}
            >
              <div className="inheritor-img-wrap">
                 <img src={person.image} alt={person.name} className="inheritor-img" />
              </div>
              <div className="inheritor-body">
                <h3 className="inheritor-name">{person.name} <span className="inheritor-age">({person.age}岁)</span></h3>
                <p className="inheritor-project">{person.project}</p>
                <span className="inheritor-tag">{person.tag}</span>
                <Link to={`/inheritors/${person.id}`} className="story-btn">
                  查看故事
                </Link>
              </div>
            </Card>
          ) : (
            <Card
              key={id}
              className="placeholder-card"
              hoverable={false}
              bordered={false}
            >
              <div className="text-center">
                <User size={48} className="mx-auto mb-2 opacity-50"/>
                <p>虚位以待</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="challenges-section">
        <div className="info-box">
          <h3 className="text-xl font-bold text-stone-800 mb-4">传承困境</h3>
          <p className="text-stone-600 mb-4">"现在的年轻人觉得做这个太苦，不愿学。手工制作效率低，成本高，我们在市场竞争中很难。"</p>
          <p className="font-bold text-right" style={{color: 'var(--primary-color)'}}>— 坚守的理由：不能让老味道断了根。</p>
        </div>
        <div className="info-box">
          <h3 className="text-xl font-bold text-stone-800 mb-4">传承创新</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>非遗月饼结合低糖配方，适应健康潮流</li>
            <li>非遗面塑做成文创小摆件，走进直播间</li>
            <li>开展研学体验班，让孩子亲手制作</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InheritorList;


