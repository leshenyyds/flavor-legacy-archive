import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import '../assets/css/Inheritors.css';

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

export default InheritorDetail;


