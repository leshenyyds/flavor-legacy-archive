import React from 'react';
import '../assets/css/SectionTitle.css';

export const SectionTitle = ({ title, subtitle }) => (
  <div className="section-title">
    <h2>
      <span className="line"></span>
      {title}
      <span className="line"></span>
    </h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

