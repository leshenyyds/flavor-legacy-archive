import React from 'react';
import '../assets/css/SectionTitle.css';

export const SectionTitle = ({ title, subtitle }) => (
  <div className="section-title">
    <h2>
      <span className="line"></span>
      {title}
      <span className="line"></span>
    </h2>
      {/*subtitle有值的情况下，渲染 <p>{subtitle}</p>*/}
      {/*subtitle无值的情况下，不渲染*/}
    {subtitle && <p>{subtitle}</p>}

  </div>
);

