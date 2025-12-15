import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { SectionTitle } from '../components/SectionTitle';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import { User, Award } from 'lucide-react';
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
      <SectionTitle title="传承人风采" />
      
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

const InheritorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [inheritorRes, techniquesRes] = await Promise.all([
          apiService.getInheritorById(id),
          apiService.getTechniques()
        ]);
        
        if (inheritorRes.data) {
          setPerson(inheritorRes.data);
          setTechniques(techniquesRes.data || []);
        } else {
          // 如果找不到传承人，重定向到 404 页面
          navigate('/404', { replace: true });
        }
      } catch (error) {
        console.error('Failed to fetch inheritor:', error);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!person) {
    return null; // 重定向中，不显示任何内容
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">{person.name}的匠心人生</h1>
        <p className="text-xl text-stone-500">{person.description}</p>
      </div>

      <div className="profile-card">
        <img src={person.image} className="profile-img-large" alt={person.name} />
        <div className="profile-info">
           <div className="mb-8 w-full">
             <div className="info-row">
               <span className="text-stone-500">传承项目</span>
               <span className="font-bold">{person.project}</span>
             </div>
             <div className="info-row">
               <span className="text-stone-500">从业年限</span>
               <span className="font-bold">40余年</span>
             </div>
             <div className="info-row" style={{border:0}}>
               <span className="text-stone-500">荣誉称号</span>
               <span className="font-bold flex items-center gap-1" style={{color: 'var(--primary-color)'}}><Award size={16}/> {person.tag}</span>
             </div>
           </div>
           <div className="profile-quote">
             "{person.quote}"
           </div>
        </div>
      </div>

      <div>
        <section className="story-section">
          <h2 className="story-heading">
             <span className="num-circle">1</span>
             成长故事
          </h2>
          <p className="text-stone-700 leading-relaxed text-lg">{person.story}</p>
        </section>
        
        <section className="story-section">
          <h2 className="story-heading">
             <span className="num-circle">2</span>
             技艺绝活
          </h2>
          <div className="skill-box">
             {person.skills && Array.isArray(person.skills) ? (
               <div className="skill-grid">
                 {person.skills.map(skillId => {
                   const technique = techniques.find(t => t.id === skillId);
                   return technique ? (
                     <div key={technique.id} className="skill-item">
                       <div className="skill-image">
                         <img src={technique.image} alt={technique.title} />
                       </div>
                       <p className="skill-name">{technique.title}</p>
                     </div>
                   ) : null;
                 })}
               </div>
             ) : (
               <p className="text-lg mb-4">{person.skills}</p>
             )}
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-heading">
             <span className="num-circle">3</span>
             传承计划
          </h2>
          <p className="text-stone-700 leading-relaxed text-lg">{person.plans}</p>
        </section>
      </div>

    </div>
  );
};

export { InheritorList, InheritorDetail };